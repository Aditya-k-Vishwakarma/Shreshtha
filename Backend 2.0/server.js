const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;
mongoose
  .connect(DB)
  .then(() => {
    console.log("DataBase Connected");
  })
  .catch((err) => {
    console.log(err);
  });
;
const port = process.env.PORT || 3000;
const app = require("./app")
app.listen(port, () => {
  console.log(`Main Server is running at 127.0.0.1:${port}`);
});
