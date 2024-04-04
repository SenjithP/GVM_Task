const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/userAuthRoute");
const productRoutes = require("./routes/productRoute")
require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
// ROUTE MIDDLEWARES
app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);

mongoose
  .connect(process.env.MONGODB_CONNECTION_URL)
  .then(() => {
    console.log("mongoDb connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(PORT, () => {
  console.log(`server started working at http://localHost:${PORT}`);
});
