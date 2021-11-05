const { DataTypes } = require("sequelize");
const connection = require("../connection");

const Basket = connection.define("Basket", {
    productName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    category: {
        type: DataTypes.STRING,
        allowNull: false
    },

    imageUrl: {
        type: DataTypes.STRING,
        allownull: false
    }
});

module.exports = Basket;