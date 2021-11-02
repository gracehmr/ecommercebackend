const { DataTypes } = require("sequelize");
const connection = require("../connection");

const Order = connection.define("Order", {

    productId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    
});


module.exports = Order;