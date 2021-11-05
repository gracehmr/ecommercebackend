const router = require("express").Router();
const { allBasket, addBasket, oneBasket, editBasket, deleteBasket, deleteAllBasket } = require("../utils/basket");

router.get("/", async (req, res) => res.status(200).json({msg: "All from Basket", data: await allBasket()}));
router.post("/", async (req, res) => res.status(201).json({msg: "Add to Basket", data: await addBasket(req.body)}));
router.delete("/", async (req, res) => res.status(200).json({msg: "Delete Everything in Basket", data: await deleteAllBasket()}));

router.get("/:id", async (req, res) => res.status(200).json({msg: "Get From Basket", data: await oneBasket(req.params.id)}));
router.put("/:id", async (req, res) => res.status(200).json({msg: "Update One From Basket", data: await editBasket(req.params.id, req.body.productName, req.body.price, req.body.category, req.body.imageUrl)}));
router.delete("/:id", async (req, res) => res.status(200).json({msg: "Delete One From Basket", data: await deleteBasket(req.params.id)}));

module.exports = router;