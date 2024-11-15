const mangooose = require('mongoose');

const menuItemSchema = new mangooose.Schema({

    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste:{
        type: String,
        enum : ['spicy','sweet','sour','bitter','salty'],
        required: true
    },
    is_drink:{
        type: Boolean,
        default: false
    },
    ingredients:{
        type: [String],
        default: [],
        required: true
    },
    num_sales:{
        type: Number,
        default: 0
    }
})

const menuItem = mangooose.model('menu', menuItemSchema);
module.exports = menuItem;