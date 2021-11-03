const { DataTypes } = require("sequelize");
const connection = require("../connection");

const Product = connection.define("Product", {
    productName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
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
}, {
    indexes: [{unique: true, fields: ["productName"]}]
});

module.exports = Product;