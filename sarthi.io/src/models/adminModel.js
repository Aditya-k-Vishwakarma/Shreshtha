const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Please enter your name"],
  },

  email: {
    type: String,
    required: [true, "Enter your official Indian Post email address"],
    unique: true,
    lowercase: true,
    validate: {
      validator: function (value) {
        // Validate email and check for Indian Post domain
        const isValidEmail = validator.isEmail(value); // Check if email format is valid
        const emailDomain = value.split("@")[1]; // Extract domain from email
        return isValidEmail && emailDomain === "indiapost.gov.in";
      },
      message: "Only Indian Post official email addresses are allowed (e.g., user@indiapost.gov.in)",
    },
  },

  phoneNumber: {
    type: String,
    required: [true, "Please provide your phone number"],
    unique: true,
    validate: {
      validator: function (value) {
        return validator.isMobilePhone(value, "any");
      },
      message: "Please provide a valid phone number",
    },
  },
  
  officeLocation:{
    type:String,
    require:[true,"admine location is required"]
  },
  

  password: {
    type: String,
    required: [true, "Please provide a password"],
    maxlength: 10,
    select: false,
  },

  passwordConfirm: {
    type: String,
    required: [false, "Please confirm your password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords do not match",
    },
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimesstamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
    return JWTTimesstamp < changedTimestamp;
  }
  return false;
};

const Admin = mongoose.model("Admin", userSchema);

module.exports = Admin;
