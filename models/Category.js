const mongoose = require('mongoose');
const Schema = mongoose.Schema
mongoose.connect('mongodb://127.0.0.1:27017/mob402', { useNewUrlParser: true });

let categorySchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  desc: String,
  image: String,
  products: [
    { type: Schema.Types.ObjectId, ref: 'products' }
  ]
});

var CategoryModel = module.exports = mongoose.model('categories', categorySchema);