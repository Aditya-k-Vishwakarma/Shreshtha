const express = require("express")
const optimzeRoute = require("./../controllers/optimizeRouteController")
const  router = express.Router()

router.post('/findRoute', optimzeRoute.findRoute)

module.exports = router