const Product = require("../models/products");

exports.createProduct = async (req,res)=>{
    try {
        const product = await Product.create({
            ...req.body,
            createdBy: req.user.id
        });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: "Product creation failed" });
    }
};

exports.getAllProducts = async(req,res)=>{
    try {
        const Products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({message:"Product creation failed"});
    }
};

exports.getProducById = async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(400).json({message:"Product not found"});
    }
};