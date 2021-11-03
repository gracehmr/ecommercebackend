const { DataTypes } = require("sequelize");
const connection = require("../connection");
const Product = require("../models/product");


const Order = connection.define("Order", {

    orderNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    
});

Product.belongsToMany(Order, { through: "productorders" });
Order.belongsToMany(Product, { through: "productorders" });

module.exports = Order;