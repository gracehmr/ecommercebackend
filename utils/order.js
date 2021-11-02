const Order = require("../models/order");

const allOrders = async () => await Order.findAll({});

const addOrder = async (order) => await Order.create(order);

const deleteAllOrders = async () => await Order.destroy({truncate: true});

const oneOrder = async (id) => await Order.findOne({where: {id}});

const editOrder = async (id, name, qty, image, price, product) => {
    const cart = await Order.findOne({where: {id}});
    return Order.update({name: name || cart.name, qty: qty || cart.qty, image: image || cart.image, price: price || cart.price, product: product || cart.product}, {where: {id}})
};

const deleteOrder = async (id) => await Order.destroy({where: {id}});


module.exports = {
    allOrders, 
    addOrder, 
    oneOrder, 
    editOrder, 
    deleteOrder, 
    deleteAllOrders
}