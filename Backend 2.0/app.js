const express = require("express");
const morgan = require("morgan");
const validation = require("validation");
const adminRoute = require("./routes/adminRoute");
const parcelRoute = require("./routes/parcelRoute")
const AppError = require("./utils/AppError");
const globalError = require("./controllers/errorController");
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const optimizeRoute = require("./routes/findRoute")
const bodyParser = require('body-parser');


dotenv.config({});

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/admin", adminRoute);
app.use("/api/parcels",parcelRoute)
app.use("/api/findRoute",optimizeRoute)


app.all("*", (req, res, next) => {
  
  next(new AppError(`find ${req.originalUrl} on this server`, 404));
});

app.use(globalError);
module.exports = app;
