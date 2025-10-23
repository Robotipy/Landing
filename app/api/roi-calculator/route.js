import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import { sendGmailEmail } from "@/libs/gmail";
import config from "@/config";
import ROICalculation from "@/models/ROICalculation";

// This route is used to handle ROI calculator submissions and email reports
export async function POST(req) {
  const connection = await connectMongo();
  
  if (!connection) {
    return NextResponse.json({ 
      error: "Database connection not available. Some features might be limited." 
    }, { status: 503 });
  }

  try {
    const body = await req.json();
    const { leadData, formData, calculations } = body;

    // Validate required fields
    if (!leadData?.email || !leadData?.name || !leadData?.companyName) {
      return NextResponse.json({ error: "Lead information is required" }, { status: 400 });
    }

    if (!calculations) {
      return NextResponse.json({ error: "Calculation data is required" }, { status: 400 });
    }

    // Format currency for email
    const formatCurrency = (amount, currency = "$") => {
      return `${currency}${amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
    };

    const formatPercentage = (percentage) => {
      return `${percentage.toFixed(2)}%`;
    };

    // Store ROI calculation in database
    try {
      const roiCalculationData = {
        leadData: {
          name: leadData.name,
          email: leadData.email,
          phone: leadData.phone,
          companyName: leadData.companyName,
          role: leadData.role,
          companySize: leadData.companySize,
        },
        processData: {
          peopleInProcess: formData.peopleInProcess,
          daysPerMonth: formData.daysPerMonth,
          hoursPerDay: formData.hoursPerDay,
          avgMonthlyCostPerPerson: formData.avgMonthlyCostPerPerson,
          workingDaysPerMonth: formData.workingDaysPerMonth,
          workingHoursPerDay: formData.workingHoursPerDay,
        },
        costData: {
          reprocessHours: formData.reprocessHours,
          overtimeHours: formData.overtimeHours,
          overtimeCost: formData.overtimeCost,
          monthlyFines: formData.monthlyFines,
          monthlyLosses: formData.monthlyLosses,
          exchangeRate: formData.exchangeRate,
        },
        selectedLicenses: formData.selectedLicenses,
        implementationCosts: {
          robotDevelopmentCost: formData.robotDevelopmentCost,
          annualMaintenanceCost: formData.annualMaintenanceCost,
        },
        calculationResults: calculations,
        analytics: {
          emailSent: false, // Will be updated after email sending
          userAgent: req.headers.get('user-agent'),
          // Note: Getting real IP might require additional headers in production
        }
      };

      const savedCalculation = await ROICalculation.create(roiCalculationData);
      console.log('ROI calculation saved with ID:', savedCalculation._id);
    } catch (dbError) {
      console.error('Failed to save ROI calculation to database:', dbError);
      // Don't fail the request if database save fails
    }

    // Create detailed HTML email for the user
    const userEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your ROI Analysis Report</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 20px; 
          }
          .header { 
            background: linear-gradient(135deg, #0891b2, #06b6d4); 
            color: white; 
            padding: 30px; 
            text-align: center; 
            border-radius: 10px; 
            margin-bottom: 30px; 
          }
          .section { 
            background: #f8fafc; 
            padding: 25px; 
            margin: 20px 0; 
            border-radius: 8px; 
            border-left: 4px solid #0891b2; 
          }
          .result-grid { 
            display: grid; 
            grid-template-columns: 1fr 1fr; 
            gap: 15px; 
            margin: 20px 0; 
          }
          .result-item { 
            background: white; 
            padding: 15px; 
            border-radius: 6px; 
            border: 1px solid #e2e8f0; 
          }
          .result-label { 
            font-weight: bold; 
            color: #475569; 
            font-size: 14px; 
            margin-bottom: 5px; 
          }
          .result-value { 
            font-size: 18px; 
            font-weight: bold; 
            color: #0891b2; 
          }
          .highlight { 
            background: #dcfdf7; 
            padding: 20px; 
            border-radius: 8px; 
            border: 2px solid #10b981; 
            text-align: center; 
            margin: 25px 0; 
          }
          .highlight .big-number { 
            font-size: 36px; 
            font-weight: bold; 
            color: #10b981; 
            margin: 10px 0; 
          }
          .table { 
            width: 100%; 
            border-collapse: collapse; 
            margin: 20px 0; 
          }
          .table th, .table td { 
            padding: 12px; 
            text-align: left; 
            border-bottom: 1px solid #e2e8f0; 
          }
          .table th { 
            background: #f1f5f9; 
            font-weight: bold; 
            color: #475569; 
          }
          .cta { 
            background: #0891b2; 
            color: white; 
            padding: 25px; 
            text-align: center; 
            border-radius: 8px; 
            margin: 30px 0; 
          }
          .cta a { 
            color: white; 
            text-decoration: none; 
            font-weight: bold; 
            background: #0e7490; 
            padding: 12px 24px; 
            border-radius: 6px; 
            display: inline-block; 
            margin: 10px; 
          }
          @media (max-width: 600px) {
            .result-grid { 
              grid-template-columns: 1fr; 
            }
            body { 
              padding: 10px; 
            }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🚀 Your ROI Analysis Report</h1>
          <p>Automation Investment Analysis for ${leadData.companyName}</p>
        </div>

        <div class="section">
          <h2>Executive Summary</h2>
          <p>Dear ${leadData.name},</p>
          <p>Thank you for using our ROI Calculator. Based on your inputs, we've analyzed the potential return on investment for implementing RPA automation in your organization.</p>
          
          <div class="highlight">
            <h3>Key Result</h3>
            <div class="big-number">${formatPercentage(calculations.roi || 0)} ROI</div>
            <p>Over 3 years with a payback period of <strong>${(calculations.paybackMonths || 0).toFixed(1)} months</strong></p>
          </div>
        </div>

        <div class="section">
          <h2>📊 Financial Analysis</h2>
          <div class="result-grid">
            <div class="result-item">
              <div class="result-label">Monthly Benefits</div>
              <div class="result-value">${formatCurrency(calculations.monthlyBenefits || 0)}</div>
            </div>
            <div class="result-item">
              <div class="result-label">Annual Benefits</div>
              <div class="result-value">${formatCurrency(calculations.annualBenefits || 0)}</div>
            </div>
            <div class="result-item">
              <div class="result-label">Total Investment</div>
              <div class="result-value">${formatCurrency(calculations.totalInvestment || 0)}</div>
            </div>
            <div class="result-item">
              <div class="result-label">Net Present Value</div>
              <div class="result-value">${formatCurrency(calculations.netPresentValue || 0)}</div>
            </div>
          </div>
        </div>

        <div class="section">
          <h2>💰 Savings Breakdown</h2>
          <table class="table">
            <thead>
              <tr>
                <th>Benefit Category</th>
                <th>Monthly Savings</th>
                <th>Annual Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Productivity Improvements</td>
                <td>${formatCurrency(calculations.monthlyProductivitySavings || 0)}</td>
                <td>${formatCurrency((calculations.monthlyProductivitySavings || 0) * 12)}</td>
              </tr>
              <tr>
                <td>Error Reduction</td>
                <td>${formatCurrency(calculations.monthlyReprocessCosts || 0)}</td>
                <td>${formatCurrency((calculations.monthlyReprocessCosts || 0) * 12)}</td>
              </tr>
              <tr>
                <td>Overtime Elimination</td>
                <td>${formatCurrency(calculations.monthlyOvertimeCosts || 0)}</td>
                <td>${formatCurrency((calculations.monthlyOvertimeCosts || 0) * 12)}</td>
              </tr>
              <tr style="font-weight: bold; background: #f1f5f9;">
                <td>Total Monthly Benefits</td>
                <td>${formatCurrency(calculations.monthlyBenefits || 0)}</td>
                <td>${formatCurrency(calculations.annualBenefits || 0)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="section">
          <h2>📈 3-Year Projection</h2>
          <table class="table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Benefits</th>
                <th>Costs</th>
                <th>Net Benefit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Year 1</td>
                <td>${formatCurrency(calculations.annualBenefits || 0)}</td>
                <td>${formatCurrency(calculations.year1Cost || 0)}</td>
                <td>${formatCurrency((calculations.annualBenefits || 0) - (calculations.year1Cost || 0))}</td>
              </tr>
              <tr>
                <td>Year 2</td>
                <td>${formatCurrency(calculations.annualBenefits || 0)}</td>
                <td>${formatCurrency(calculations.year2Cost || 0)}</td>
                <td>${formatCurrency((calculations.annualBenefits || 0) - (calculations.year2Cost || 0))}</td>
              </tr>
              <tr>
                <td>Year 3</td>
                <td>${formatCurrency(calculations.annualBenefits || 0)}</td>
                <td>${formatCurrency(calculations.year3Cost || 0)}</td>
                <td>${formatCurrency((calculations.annualBenefits || 0) - (calculations.year3Cost || 0))}</td>
              </tr>
              <tr style="font-weight: bold; background: #dcfdf7;">
                <td>Total (3 Years)</td>
                <td>${formatCurrency(calculations.totalBenefits3Years || 0)}</td>
                <td>${formatCurrency(calculations.totalCosts3Years || 0)}</td>
                <td>${formatCurrency((calculations.totalBenefits3Years || 0) - (calculations.totalCosts3Years || 0))}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="section">
          <h2>🎯 Process Analysis</h2>
          <p><strong>Current Process:</strong></p>
          <ul>
            <li>${formData.peopleInProcess} people involved in the process</li>
            <li>${formData.daysPerMonth} days per month execution</li>
            <li>${formData.hoursPerDay} hours per day dedicated to this process</li>
            <li>Total: ${calculations.totalRepetitiveHours || 0} repetitive hours per month</li>
          </ul>
          
          <p><strong>Cost per Hour:</strong> ${formatCurrency(calculations.costPerHour || 0)}</p>
        </div>

        <div class="cta">
          <h3>Ready to Move Forward?</h3>
          <p>Our team is ready to help you implement this automation solution and achieve these results.</p>
          <a href="https://${config.domainName}/contact">Contact Our Sales Team</a>
          <a href="https://${config.domainName}/contact-us">Schedule a Demo</a>
          <p style="margin-top: 20px; font-size: 14px;">
            Questions? Reply to this email or contact us at ${config.mailgun.supportEmail}
          </p>
        </div>

        <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px;">
          <p>This analysis was generated by ${config.appName} ROI Calculator</p>
          <p>© ${new Date().getFullYear()} ${config.appName}. All rights reserved.</p>
        </div>
      </body>
      </html>
    `;

    // Create summary email for admin notification
    const adminEmailHtml = `
      <h2>New ROI Calculator Submission</h2>
      <p><strong>Company:</strong> ${leadData.companyName}</p>
      <p><strong>Contact:</strong> ${leadData.name} (${leadData.email})</p>
      <p><strong>Phone:</strong> ${leadData.phone || 'Not provided'}</p>
      <p><strong>Role:</strong> ${leadData.role || 'Not provided'}</p>
      <p><strong>Company Size:</strong> ${leadData.companySize || 'Not provided'}</p>
      
      <h3>Key Results:</h3>
      <ul>
        <li><strong>ROI:</strong> ${formatPercentage(calculations.roi || 0)}</li>
        <li><strong>Monthly Benefits:</strong> ${formatCurrency(calculations.monthlyBenefits || 0)}</li>
        <li><strong>Payback Period:</strong> ${(calculations.paybackMonths || 0).toFixed(1)} months</li>
        <li><strong>Total Investment:</strong> ${formatCurrency(calculations.totalInvestment || 0)}</li>
        <li><strong>NPV:</strong> ${formatCurrency(calculations.netPresentValue || 0)}</li>
      </ul>
      
      <h3>Process Details:</h3>
      <ul>
        <li><strong>People in Process:</strong> ${formData.peopleInProcess}</li>
        <li><strong>Hours per Month:</strong> ${calculations.totalRepetitiveHours || 0}</li>
        <li><strong>Monthly Cost per Person:</strong> ${formatCurrency(formData.avgMonthlyCostPerPerson)}</li>
        <li><strong>Exchange Rate:</strong> ${formData.exchangeRate}</li>
      </ul>
      
      <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
    `;

    // Send email to user
    try {
      await sendGmailEmail({
        to: leadData.email,
        subject: `Your ROI Analysis Report - ${formatPercentage(calculations.roi || 0)} Return on Investment`,
        html: userEmailHtml,
      });
    } catch (emailError) {
      console.error('Failed to send user email:', emailError);
      // Don't fail the request if email fails
    }

    // Send notification email to admin
    try {
      await sendGmailEmail({
        to: process.env.GMAIL_USER_EMAIL || 'admin@robotipy.com',
        subject: `New ROI Calculator Submission - ${leadData.companyName} (${formatPercentage(calculations.roi || 0)} ROI)`,
        html: adminEmailHtml,
        replyTo: leadData.email,
      });
    } catch (emailError) {
      console.error('Failed to send admin notification:', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json({
      message: "ROI report sent successfully",
      roi: calculations.roi,
      monthlyBenefits: calculations.monthlyBenefits,
      paybackMonths: calculations.paybackMonths
    });

  } catch (error) {
    console.error('Error processing ROI calculation:', error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
} 