const Basket = require("../models/basket");

const allBasket = async () => await Basket.findAll({});

const addBasket = async (basket) => await Basket.create(basket);

const deleteAllBasket = async () => await Basket.destroy({truncate: true});

const oneBasket = async (id) => await Basket.findOne({where: {id}});

const editBasket = async (id, productName, price, category, imageUrl) => {
    const item = await Basket.findOne({where: {id}});
    return Basket.update({productName: productName || item.productName, price: price || item.price, category: category || item.category, imageUrl: imageUrl || item.imageUrl}, {where: {id}})
};

const deleteBasket = async (id) => await Basket.destroy({where: {id}});

module.exports = {
    allBasket,
    addBasket,
    deleteAllBasket,
    oneBasket,
    editBasket,
    deleteBasket
}