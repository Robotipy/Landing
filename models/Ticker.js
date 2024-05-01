import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

// LEAD SCHEMA is used to store the leads that are generated from the landing page.
// You would use this if your product isn't ready yet and you want to collect emails
// The <ButtonLead /> component & the /api/lead route are used to collect the emails

const tickerSchema = mongoose.Schema(
  {
    ticker: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },
    shares: {
      type: Number,
    },
    cost: {
      type: Number,
    },
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

// add plugin that converts mongoose to json
tickerSchema.plugin(toJSON);

export default mongoose.models.Ticker ||
  mongoose.model("Ticker", tickerSchema);
