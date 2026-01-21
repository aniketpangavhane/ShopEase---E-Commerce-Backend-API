const Cart = require("../models/Cart");
const Product = require("../models/products");

exports.addToCart = async(req,res)=>{
    const{productId, quantity} = req.body;

    const product = await Product.findById(productId);
    if(!product){
        return res.status(404).json({message:"Product not found"});
    }

    let cart = await Cart.findOne({user:req.user.id});

    
}