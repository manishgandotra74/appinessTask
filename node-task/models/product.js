const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  product_name: { type: String, required: true },
  category_id: { type: String, required: true },
});

module.exports = mongoose.model('Products', postSchema);
