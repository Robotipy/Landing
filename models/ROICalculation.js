import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

// ROI CALCULATION SCHEMA is used to store ROI calculator submissions
// This helps track user interactions and provides analytics data
const roiCalculationSchema = mongoose.Schema(
  {
    // Lead/Contact Information
    leadData: {
      name: {
        type: String,
        trim: true,
        required: true,
      },
      email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
      },
      phone: {
        type: String,
        trim: true,
      },
      companyName: {
        type: String,
        trim: true,
        required: true,
      },
      role: {
        type: String,
        trim: true,
      },
      companySize: {
        type: String,
        enum: ["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"],
      },
    },

    // Process Parameters
    processData: {
      peopleInProcess: {
        type: Number,
        required: true,
        min: 1,
      },
      daysPerMonth: {
        type: Number,
        required: true,
        min: 1,
      },
      hoursPerDay: {
        type: Number,
        required: true,
        min: 1,
      },
      avgMonthlyCostPerPerson: {
        type: Number,
        required: true,
        min: 0,
      },
      workingDaysPerMonth: {
        type: Number,
        default: 22,
      },
      workingHoursPerDay: {
        type: Number,
        default: 8,
      },
    },

    // Cost Parameters
    costData: {
      reprocessHours: {
        type: Number,
        default: 0,
        min: 0,
      },
      overtimeHours: {
        type: Number,
        default: 0,
        min: 0,
      },
      overtimeCost: {
        type: Number,
        default: 160,
        min: 0,
      },
      monthlyFines: {
        type: Number,
        default: 0,
        min: 0,
      },
      monthlyLosses: {
        type: Number,
        default: 0,
        min: 0,
      },
      exchangeRate: {
        type: Number,
        default: 1,
        min: 0,
      },
    },

    // License Selection
    selectedLicenses: {
      licenseS: { type: Number, default: 0, min: 0 },
      licenseM: { type: Number, default: 0, min: 0 },
      licenseL: { type: Number, default: 0, min: 0 },
      orchestratorEntry: { type: Number, default: 0, min: 0 },
      orchestratorStandard: { type: Number, default: 0, min: 0 },
      orchestratorEnterprise: { type: Number, default: 0, min: 0 },
      orchestratorCorporate: { type: Number, default: 0, min: 0 },
    },

    // Implementation Costs
    implementationCosts: {
      robotDevelopmentCost: {
        type: Number,
        default: 7800,
        min: 0,
      },
      annualMaintenanceCost: {
        type: Number,
        default: 450,
        min: 0,
      },
    },

    // Calculated Results
    calculationResults: {
      totalRepetitiveHours: Number,
      monthlyProductivitySavings: Number,
      monthlyReprocessCosts: Number,
      monthlyOvertimeCosts: Number,
      monthlyBenefits: Number,
      annualBenefits: Number,
      totalLicenseCostUSD: Number,
      totalLicenseCostLocal: Number,
      totalInvestment: Number,
      year1Cost: Number,
      year2Cost: Number,
      year3Cost: Number,
      totalBenefits3Years: Number,
      totalCosts3Years: Number,
      roi: Number,
      paybackMonths: Number,
      netPresentValue: Number,
      costPerHour: Number,
    },

    // Metadata
    templateUsed: {
      type: String,
      enum: ["", "banking", "manufacturing", "healthcare", "insurance"],
      default: "",
    },
    
    // Analytics
    analytics: {
      emailSent: {
        type: Boolean,
        default: false,
      },
      emailSentAt: Date,
      userAgent: String,
      ipAddress: String,
      sessionId: String,
    },

    // Follow-up tracking
    followUp: {
      contactRequested: {
        type: Boolean,
        default: false,
      },
      demoRequested: {
        type: Boolean,
        default: false,
      },
      status: {
        type: String,
        enum: ["New", "Contacted", "Qualified", "Demo Scheduled", "Proposal Sent", "Closed Won", "Closed Lost"],
        default: "New",
      },
      notes: String,
      assignedTo: String,
      nextFollowUp: Date,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

// Indexes for performance
roiCalculationSchema.index({ "leadData.email": 1 });
roiCalculationSchema.index({ "leadData.companyName": 1 });
roiCalculationSchema.index({ createdAt: -1 });
roiCalculationSchema.index({ "calculationResults.roi": -1 });
roiCalculationSchema.index({ "followUp.status": 1 });

// Virtual for total ROI score (used for ranking/sorting)
roiCalculationSchema.virtual('roiScore').get(function() {
  return this.calculationResults?.roi || 0;
});

// Virtual for investment size category
roiCalculationSchema.virtual('investmentCategory').get(function() {
  const investment = this.calculationResults?.totalInvestment || 0;
  if (investment < 10000) return 'Small';
  if (investment < 50000) return 'Medium';
  if (investment < 100000) return 'Large';
  return 'Enterprise';
});

// Static method to find high-value prospects
roiCalculationSchema.statics.findHighValueProspects = function() {
  return this.find({
    'calculationResults.roi': { $gte: 100 }, // ROI >= 100%
    'calculationResults.totalInvestment': { $gte: 10000 }, // Investment >= $10k
    'followUp.status': { $in: ['New', 'Contacted'] }
  }).sort({ 'calculationResults.roi': -1 });
};

// Instance method to calculate follow-up priority score
roiCalculationSchema.methods.getFollowUpPriority = function() {
  const roi = this.calculationResults?.roi || 0;
  const investment = this.calculationResults?.totalInvestment || 0;
  const companySize = this.leadData?.companySize || '';
  
  let score = 0;
  
  // ROI contribution (0-40 points)
  score += Math.min(roi / 5, 40);
  
  // Investment size contribution (0-30 points)
  score += Math.min(investment / 3000, 30);
  
  // Company size contribution (0-30 points)
  const sizeScore = {
    '1-10': 5,
    '11-50': 10,
    '51-200': 20,
    '201-500': 25,
    '501-1000': 30,
    '1000+': 30
  };
  score += sizeScore[companySize] || 0;
  
  return Math.round(score);
};

// Add plugin that converts mongoose to json
roiCalculationSchema.plugin(toJSON);

export default mongoose.models.ROICalculation || mongoose.model("ROICalculation", roiCalculationSchema); 