const Product = require("../models/product");

const allProducts = async () => await Product.findAll({});

const addProduct = async (product) => await Product.create(product);

const deleteAllProducts = async () => await Product.destroy({truncate: true});

const oneProduct = async (id) => await Product.findOne({where: {id}});

const editProduct = async (id, name, description, price, imageUrl) => {
    const item = await Product.findOne({where: {id}});
    return Product.update({name: name || item.name, description: description || item.description, price: price || item.price, imageUrl: imageUrl || item.imageUrl}, {where: {id}})
};

const deleteProduct = async (id) => await Product.destroy({where: {id}});

module.exports = {
    allProducts,
    addProduct,
    deleteAllProducts,
    oneProduct,
    editProduct,
    deleteProduct
}