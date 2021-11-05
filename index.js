require("dotenv").config();

const express = require("express");
const passport = require("passport");
const app = express();
const cors = require("cors");

const connection = require("./connection");
const { verifyStrategy, registerStrategy, loginStrategy } = require("./middleware/auth");
const User = require("./models/user");
const userRouter = require("./routes/user");
const Product = require("./models/product");
const productRouter = require("./routes/product");
const Order = require("./models/order");
const orderRouter = require("./routes/order");
const Basket = require("./models/basket")
const basketRouter = require("./routes/basket")

app.use(express.json());
app.use(cors());
app.use(passport.initialize());

passport.use("register", registerStrategy);
passport.use("login", loginStrategy);
passport.use(verifyStrategy);
app.use("/product", productRouter);
app.use("/users", userRouter);
app.use("/orders", orderRouter);
app.use("/basket", basketRouter);
app.get("*", (req, res) => {
    res.status(404).json({msg: "error"})
});

app.listen(process.env.PORT || process.env.HTTP_PORT || 80, () => {
    connection.authenticate();
    User.sync({alter:true});
    Product.sync({alter: true});
    Order.sync({alter: true});
    Basket.sync({alter:true});
    console.log("App online");
});