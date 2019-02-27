const mongoose = require('mongoose');
const Schema = mongoose.Schema

mongoose.connect('mongodb://127.0.0.1:27017/mob402', { useNewUrlParser: true });

let productSchema = new  mongoose.Schema({
  _id: Schema.Types.ObjectId,
  name:String,
  price: Number,
  old_price: Number,
  contents:String,
  image:String,
  galeries:Array,
  cate_id: String,
})

var ProducModel = module.exports = mongoose.model('products',productSchema);