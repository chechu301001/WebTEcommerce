const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");

//CONNECT DB
const connectDB = require("./db/db");
connectDB();

//MIDDLEWARE
app.use(express.json());

//APP USE
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is running in port ${PORT}`));
