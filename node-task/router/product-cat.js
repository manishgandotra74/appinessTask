const express = require('express');
const router = express.Router();
const Category = require('../models/category')
const Product = require('../models/product');
//add-category ::
// http://localhost:9000/products/add-category?name=Wood
router.post("/add-category", function (req, res) {
    const category = new Category({
        category_name: req.query.name,
    });
    category.save().then(friend => {
        if (friend._id) {
            res.status(200).send({ message: "Category Added Successfully" });
        } else {
            res.status(500).send('Some error occured');
        }
    })
});
//add product ::
// http://localhost:9000/products/add-product?name=Butter&category_id=5f210e6fcef5730c94cd5b54
// http://localhost:9000/products/add-product?name=Curd&category_id=5f210e6fcef5730c94cd5b54
router.post("/add-product", function (req, res) {
    const product = new Product({
        product_name: req.query.name,
        category_id: req.query.category_id
    });
    Category.find({ _id: req.query.category_id }).then(produc => {
        if (produc.length > 0) {
            product.save().then(prod => {
                if (prod._id) {
                    res.status(200).send({ message: "Product Added Successfully" });
                } else {
                    res.status(500).send('Some error occured');
                }
            })
        } else {
            res.status(401).send('Please enter valid category');
        }
    })
});
router.get("/getCategoryProductCount", function (req, res) {
    var pipeline = [

        // {$group : {_id : {category_id: "$category_id"},total: { $sum: +1 }}},
        { $lookup: { from: "categories", localField: "_id", foreignField: "category_id", as: "details" } }
    ]
    Product.aggregate(pipeline).then(data => {
            res.send(data)
        })

});

module.exports = router;