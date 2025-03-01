import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^.+@.+\..+$/ // Basic email validation
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['student', 'coordinator'],
    required: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  profile: {
    name: String,
    department: String,
    year: Number,
    // For students
    rollNumber: String,
    cgpa: Number,
    resume: String, // URL to stored resume
    // For coordinators
    employeeId: String,
    image: String // URL to stored image
  }
}, { timestamps: true });

// Password hashing middleware
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;