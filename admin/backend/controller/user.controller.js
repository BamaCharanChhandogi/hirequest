import User from "../model/user.model.js";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import fs from 'fs';

// Ensure uploads directory exists
const uploadDir = "uploads/resumes";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Sanitize filename and add timestamp
    const sanitizedFilename = file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_');
    cb(null, `${Date.now()}-${sanitizedFilename}`);
  }
});

// Configure multer with file filtering
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['.pdf', '.doc', '.docx'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF and Word documents are allowed.'));
    }
  }
});

export const register = async (req, res) => {
  try {
    upload.single('resume')(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          message: "File upload error",
          error: err.message
        });
      }

      try {
        // Construct base user data
        const userData = {
          email: req.body.email,
          password: req.body.password,
          role: req.body.role,
          profile: {
            name: req.body.name,
          }
        };

        // Add role-specific profile data
        if (req.body.role === 'student') {
          userData.profile = {
            ...userData.profile,
            department: req.body.department,
            year: req.body.year,
            rollNumber: req.body.rollNumber,
            cgpa: req.body.cgpa,
            resume: req.file ? req.file.path : null
          };
        } else if (req.body.role === 'coordinator') {
          userData.profile = {
            ...userData.profile,
            employeeId: req.body.employeeId
          };
        }

        // Validate required fields
        const requiredFields = ['email', 'password', 'role', 'name'];
        if (req.body.role === 'student') {
          requiredFields.push('department', 'year', 'rollNumber', 'cgpa');
        } else if (req.body.role === 'coordinator') {
          requiredFields.push('employeeId');
        }

        for (const field of requiredFields) {
          if (!req.body[field]) {
            return res.status(400).json({
              message: `Missing required field: ${field}`
            });
          }
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
          return res.status(400).json({
            message: "Email already registered"
          });
        }

        // Create and save user
        const user = new User(userData);
        await user.save();

        // Generate JWT token
        const token = jwt.sign(
          { id: user._id, role: user.role },
          process.env.JWT_SECRET,
          { expiresIn: "24h" }
        );

        res.status(201).json({
          message: "User registered successfully",
          token,
          user: {
            id: user._id,
            email: user.email,
            role: user.role,
            name: user.profile.name
          }
        });

      } catch (error) {
        // Clean up uploaded file if registration fails
        if (req.file) {
          fs.unlink(req.file.path, (err) => {
            if (err) console.error('Error deleting file:', err);
          });
        }
        throw error;
      }
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required"
      });
    }

    // Find user and include profile data
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials"
      });
    }

    // Verify password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials"
      });
    }

    // Check verification status for students
    if (user.role === "student" && !user.isVerified) {
      return res.status(401).json({
        message: "Please verify your email"
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    // Return user data without sensitive information
    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        name: user.profile.name,
        profile: {
          ...(user.role === 'student' ? {
            department: user.profile.department,
            year: user.profile.year,
            rollNumber: user.profile.rollNumber,
            cgpa: user.profile.cgpa,
            image: user.profile.image,
          } : {
            employeeId: user.profile.employeeId
          })
        }
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};