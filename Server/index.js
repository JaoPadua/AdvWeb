const express = require("express");
const app = express();
const mongoose = require ("mongoose")
const dotenv = require("dotenv");
const userRoutes = require("./routes/user.js");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const cartRoute = require("./routes/cart.js");
const orderRoute = require("./routes/order");
const cors = require("cors");

dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("Db Connection Success"))
.catch((err) => {console.log(err)

});
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);



app.listen(process.env.PORT || 5000, ()  => {
    console.log("Server is listening");
});