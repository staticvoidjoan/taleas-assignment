const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        type: {
            type: String,
            required: true,
            enum: ["drink","food","pastry"]
        }

    }
);

const Product = mongoose.model('Product',productSchema);
module.exports = Product;