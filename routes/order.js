const router = require("express").Router();
const { allOrders, addOrder, oneOrder, editOrder, deleteOrder, deleteAllOrders } = require("../utils/order");

router.get("/", async (req, res) => res.status(200).json({msg: "All Orders", data: await allOrders()}));
router.post("/", async (req, res) => res.status(201).json({msg: "Add Order", data: await addOrder(req.body)}));
router.delete("/", async (req, res) => res.status(200).json({msg: "Delete All Orders", data: await deleteAllOrders()}));

router.get("/:id", async (req, res) => res.status(200).json({msg: "Get One Order", data: await oneOrder(req.params.id)}));
router.put("/:id", async (req, res) => res.status(200).json({msg: "Update One Order", data: await editOrder(req.params.id, req.body.orderNumber)}));
router.delete("/:id", async (req, res) => res.status(200).json({msg: "Delete One Order", data: await deleteOrder(req.params.id)}));

module.exports = router;