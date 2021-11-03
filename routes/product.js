const router = require("express").Router();
const { allProducts, addProduct, oneProduct, editProduct, deleteProduct, deleteAllProducts } = require("../utils/product");

router.get("/", async (req, res) => res.status(200).json({msg: "All Products", data: await allProducts()}));
router.post("/", async (req, res) => res.status(201).json({msg: "Add Product", data: await addProduct(req.body)}));
router.delete("/", async (req, res) => res.status(200).json({msg: "Delete All Products", data: await deleteAllProducts()}));

router.get("/:id", async (req, res) => res.status(200).json({msg: "Get One Product", data: await oneProduct(req.params.id)}));
router.put("/:id", async (req, res) => res.status(200).json({msg: "Update One Product", data: await editProduct(req.params.id, req.body.productName, req.body.description, req.body.price, req.body.category, req.body.imageUrl)}));
router.delete("/:id", async (req, res) => res.status(200).json({msg: "Delete One Product", data: await deleteProduct(req.params.id)}));

module.exports = router;
