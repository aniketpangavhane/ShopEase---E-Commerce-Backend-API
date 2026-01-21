const express = require("express");
const router = express.Router();

const{
    createProduct,
    getAllProducts,
    getProductById
} = require("../controllers/productController");

const authMiddleware = require("../middleware/authMiddlware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.get("/",getAllProducts);
router.get("/:id",getAllProducts);

router.post(
    "/",
    authMiddleware,
    roleMiddleware("admin"),
    createProduct
);

module.exports = router;

