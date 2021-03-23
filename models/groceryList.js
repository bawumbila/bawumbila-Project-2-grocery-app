const mongoose = require("mongoose");



const groceryitemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  done: Boolean
});

const groceryListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  items: [groceryitemSchema],
  totalPrice: { type: Number, required: true },
  done: Boolean

});

const GrocreryList = mongoose.model("GroceryList", groceryListSchema);

module.exports = GrocreryList;
