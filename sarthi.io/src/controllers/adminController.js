const fs = require('fs');
const path = require('path');
const Admin = require("./../models/adminModel");
const catchAsync = require("./../utils/catchAsync");
// const {promisiy} = require("utils")
const jwt = require("jsonwebtoken")
const AppError = require("./../utils/AppError");
const bcrypt = require("bcrypt")
const crypto = require('crypto');
const handlebars = require('handlebars');
const catchAsync = require("./../utils/catchAsync")
const AppError = require("./../utils/AppError")






exports.signup = catchAsync(async (req, res) => {
  const { fullname, email, phoneNumber, password, passwordConfirm } = req.body;

  if (!fullname || !email || !phoneNumber || !password || !passwordConfirm) {
    return res.status(400).json({
      message: "Something is missing",
      success: false,
    });
  }

  if (password !== passwordConfirm) {
    return res.status(400).json({
      message: "Passwords do not match",
      success: false,
    });
  }

  const admin = await Admin.findOne({ email });
  if (admin) {
    return res.status(400).json({
      message: "Admin already exists with this email.",
      success: false,
    });
  }

  await Admin.create(req.body);

  return res.status(201).json({
    message: "Account created successfully.",
    success: true,
  });
});


exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }

  let admin = await Admin.findOne({ email }).select('+password'); // Include password explicitly
  if (!admin) {
    return next(new AppError('User does not exist', 400));
  }

  const isPasswordMatch = await bcrypt.compare(password, admin.password);
  if (!isPasswordMatch) {
    return next(new AppError('Incorrect email or password', 400));
  }

  const tokenData = {
    adminId: admin._id,
  };
  const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
    expiresIn: '1d',
  });

  admin = {
    _id: admin._id,
    fullname: admin.fullname,
    email: admin.email,
    phoneNumber: admin.phoneNumber,
  };

  return res
    .status(200)
    .cookie('token', token, {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      httpOnly: true, // Corrected property
      sameSite: 'strict',
    })
    .json({
      message: `Welcome back ${admin.fullname}`,
      admin,
      success: true,
    });
});           


exports.logout = catchAsync( async (req, res) => {
    
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logged out successfully.",
            success: true
        })
    
})


// exports.protect = catchAsync(async (req, res, next) => {

//     let token;
  
//     // Extract token from Authorization header
//     if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//       token = req.headers.authorization.split(' ')[1];
//     }
  
//     // If no token is found
//     if (!token) {
//       return next(new AppError('You are not logged in! Please log in to get access', 401));
//     }
  
//     // Verify token
//     const decoded = await jwt.verify(token, process.env.JWT_SECRET);
  
//     // Find the user associated with the token
//     const freshUser = await User.findById(decoded.id);
  
//     if (!freshUser) {
//       return next(new AppError('The user belonging to this token no longer exists', 401));
//     }
  
//     // Attach the user to the request object
//     req.user = freshUser;
  
//     next();
//   });

exports.sAuthenticated = catchAsync(async (req, res, next) => {
    
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                message: "Admin not authenticated",
                success: false,
            })
        }
        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        if(!decode){
            return res.status(401).json({
                message:"Invalid token",
                success:false
            })
        };
        req.id = decode.adminId;
        next();
    
})

exports.deleteAdminByEmail = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
      return next(new AppError('Please provide the email to delete the admin', 400));
  }

  // Find the admin by email
  const admin = await Admin.findOne({ email });

  if (!admin) {
      return next(new AppError('Admin with this email not found!', 404));
  }

  // Delete the admin
  await Admin.findOneAndDelete({ email });

  // Send response
  res.status(200).json({
      message: `Admin with email ${email} deleted successfully!`,
      success: true,
  });
});


// exports.forgotPassword = catchAsync(async (req, res) => {
//     const { email } = req.body;

//     // Check if the user exists in the database
//     const admin = await Admin.findOne({ email });
//     if (!admin) {
//         return res.status(404).json({ message: 'User not found' });
//     }

//     // Generate a reset token (valid for 1 hour)
//     const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//         expiresIn: '1h',
//     });

//     // Hash the reset token and save it in the database (never store plain tokens)
//     const hashedResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
//     admin.resetPasswordToken = hashedResetToken;
//     admin.resetPasswordExpire = Date.now() + 3600000; // 1 hour
//     await admin.save();

//     // Load and compile the email template
//     const templatePath = path.join(__dirname, '../templates/resetPassword.html');
//     const source = fs.readFileSync(templatePath, 'utf-8');
//     const compiledTemplate = handlebars.compile(source);

//     // Correctly interpolate the reset URL using template literals
//     const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;
//     const htmlToSend = compiledTemplate({ resetLink: resetUrl });

//     // Configure Nodemailer
//     const transporter = nodemailer.createTransport({
//         service: 'Gmail',
//         auth: {
//             admin: process.env.EMAIL,  // Your email address
//             pass: process.env.PASSWORD,  // Your email password or app password
//         },
//     });

//     // Prepare email options
//     const mailOptions = {
//         from: 'noreply@yourapp.com',
//         to: admin.email,
//         subject: 'Password Reset Request',
//         html: htmlToSend, // Use the compiled HTML template
//     };

//     try {
//         // Send the email
//         await transporter.sendMail(mailOptions);

//         // Respond to the user after email is sent successfully
//         res.status(200).json({ message: 'Reset email sent successfully!' });
//     } catch (error) {
//         // Handle any errors that occur while sending email
//         return next(new AppError('There was an error sending the email. Please try again later.', 500));
//     }
// });





// exports.resetPassword = catchAsync(async (req, res) => {
//     const { token } = req.params;
//     const { newPassword } = req.body;

    
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const admin = await Admin.findById(decoded.id);

//         if (!admin) return res.status(404).json({ message: 'Invalid token or user not found' });

//         // Update password
//         admin.password = newPassword;
//         admin.resetPasswordToken = undefined; // Clear reset token
//         admin.resetPasswordExpire = undefined;
//         await admin.save();

//         res.status(200).json({ message: 'Password reset successfully!' });
    
// });