// models/JobListing.js
const mongoose = require("mongoose");
const validator = require("validator");

const jobListingSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    companyWebsite: {
      type: String,
      validate: {
        validator: validator.isURL,
        message: "Invalid company website URL",
      },
    },
    companyLogo: {
      type: String, // Cloudinary or file path
      default: null,
    },
    typeOfDrive: {
      type: String,
      enum: ["CAMPUS", "ONLINE", "HYBRID"],
      required: true,
    },
    dateOfCampusDrive: {
      type: Date,
      required: true,
    },
    streamRequired: [
      {
        type: String,
        enum: ["CSE", "ECE", "MECH", "CIVIL", "EEE"],
      },
    ],
    eligibilityCriteria: [String],
    batchYear: {
      type: String,
      enum: ["2024", "2025", "2026"],
      required: true,
    },
    jobPosition: {
      type: String,
      required: true,
    },
    jobLocation: {
      type: String,
      required: true,
    },
    dateOfJoining: {
      type: Date,
      required: true,
    },
    payPackage: {
      type: Number,
      required: true,
    },
    stipendDuringInternship: Number,
    salaryAfterInternship: {
      type: Number,
      required: true,
    },
    anyBond: String,
    placementProcess: [
      {
        roundName: String,
        description: String,
      },
    ],
    applyLink: {
      type: String,
      validate: {
        validator: validator.isURL,
        message: "Invalid apply link",
      },
    },
  },
  { timestamps: true }
);

// Validation to ensure campus drive date is before joining date
jobListingSchema.pre("validate", function (next) {
  if (this.dateOfCampusDrive && this.dateOfJoining) {
    if (this.dateOfCampusDrive > this.dateOfJoining) {
      next(new Error("Campus drive date cannot be after joining date"));
    }
  }
  next();
});

const JobListing = mongoose.model("JobListing", jobListingSchema);

module.exports = JobListing;
