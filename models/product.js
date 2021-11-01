const { DataTypes } = require("sequelize");
const connection = require("../connection");

const Product = connection.define("Product", {
    name: {
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

    imageUrl: {
        type: DataTypes.STRING,
        allownull: false
    }
}, {
    indexes: [{unique: true, fields: ["name"]}]
});

module.exports = Product;