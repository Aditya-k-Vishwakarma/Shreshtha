

const express = require("express")
const authController = require('./../controllers/authController')
const router = express.Router();


router.post('/signup',authController.signup)
router.post('/login',authController.login)
router.post('/logout',authController.logout)
router.delete('/delete/delete-by-email', authController.deleteAdminByEmail)
// router.post('/forgot-password',authController.forgotPassword)
// router.post('/reset-password/:token',authController.resetPassword)




module.exports = router;