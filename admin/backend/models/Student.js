// models/Student.js
const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 255,
    },
    universityId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    universityEmail: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: "Invalid university email",
      },
    },
    personalEmail: {
      type: String,
      validate: {
        validator: validator.isEmail,
        message: "Invalid personal email",
      },
      required: false,
    },
    phoneNumber: {
      type: String,
      validate: {
        validator: validator.isMobilePhone,
        message: "Invalid phone number",
      },
    },
    course: {
      type: String,
      enum: [
        "B.Tech",
        "B.E",
        "M.Tech",
        "M.E",
        "MCA",
        "M.Sc (CS)",
        "Ph.D",
        "B.Sc (IT)",
        "M.Sc (IT)",
        "BCA",
      ],
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    profileImage: {
      type: String, // Cloudinary or file path
      default: null,
    },
    bio: {
      type: String,
      maxlength: 500,
    },
    resume: {
      type: String, // File path or Cloudinary link
      default: null,
    },
    skills: [String],
    projects: [
      {
        name: String,
        description: String,
        technologies: [String],
      },
    ],
    socialLinks: {
      linkedin: String,
      github: String,
      portfolio: String,
    },
  },
  { timestamps: true }
);

// Pre-save hook for password hashing
studentSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Method to compare password
studentSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
