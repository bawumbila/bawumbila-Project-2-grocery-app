const GroceryList = require("../models/groceryList");
// const Performer = require('../models/performer');
module.exports = {
  index,
  show,
  new: newGroceryList,
  create,
};
function index(req, res) {
  GroceryList.find({}, function (err, groceryList) {
    res.render("grocery/index", { title: "All Grocery List", groceryList });
  });
}

function newGroceryList(req, res) {
  res.render('grocery/new');
};


function create(req, res) {
  Grocery.create(req.body, function(err, grocery) {
        console.log(req.body); 
        res.redirect('/groceryList'); 
    })
}




function create(req, res) {
  // remove empty/blank inputs from req.body
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.done = !!req.body.done;
  GroceryList.create(req.body, function (err, movie) {
    // one way to handle errors
    if (err) {
      console.log(err)
    return res.redirect("/grocery/index");
    }
    // for now, redirect right back to the "new" view
    res.redirect(`/grocery/index`);
  });
}


function show(req, res) {
    res.render("show");
  }