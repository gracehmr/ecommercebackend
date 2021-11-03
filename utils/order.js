const Order = require("../models/order");

const allOrders = async () => await Order.findAll({});

const addOrder = async (order) => await Order.create(order);

const deleteAllOrders = async () => await Order.destroy({truncate: true});

const oneOrder = async (id) => await Order.findOne({where: {id}});

const editOrder = async (id, orderNumber) => {
    const cart = await Order.findOne({where: {id}});
    return Order.update({orderNumber: orderNumber || cart.orderNumber}, {where: {id}})
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