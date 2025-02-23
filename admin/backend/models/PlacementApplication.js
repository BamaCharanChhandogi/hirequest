// models/PlacementApplication.js
const mongoose = require("mongoose");
const Student = require("./Student");
const JobListing = require("./JobListing");

const placementApplicationSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    jobListing: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "JobListing",
      required: true,
    },
    currentStatus: {
      type: String,
      enum: ["APPLIED", "ROUND1", "ROUND2", "ROUND3", "SELECTED", "REJECTED"],
      default: "APPLIED",
    },
    roundResults: mongoose.Schema.Types.Mixed,
    appliedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Create unique index for student-job combination
placementApplicationSchema.index(
  { student: 1, jobListing: 1 },
  { unique: true }
);

// Pre-save validation to check stream eligibility
placementApplicationSchema.pre("save", async function (next) {
  try {
    const jobListing = await JobListing.findById(this.jobListing);
    const student = await Student.findById(this.student);

    if (!jobListing || !student) {
      return next(new Error("Invalid student or job listing"));
    }

    // Check if student's course matches job's required streams
    if (!jobListing.streamRequired.includes(student.course)) {
      return next(new Error("Student course does not match job requirements"));
    }

    next();
  } catch (error) {
    next(error);
  }
});

const PlacementApplication = mongoose.model(
  "PlacementApplication",
  placementApplicationSchema
);

module.exports = PlacementApplication;
