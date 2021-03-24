const GroceryList = require("../models/groceryList");
const GroceryItem = require("../models/groceryItems");
// const Performer = require('../models/performer');
module.exports = {
  index,
  show,
  new: newGroceryList,
  create,
  groceryList,
  addGrocery,
  createGrocery,
  grocery

};
function index(req, res) {
  GroceryList.find({}, function (err, groceryList) {
    res.render("grocery/index", { title: "All Grocery List", groceryList });
  });
}

function newGroceryList(req, res) {
  res.render('grocery/new', { title: "New Grocery List" });
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
  GroceryList.create(req.body, function (err, groceryList) {
    // one way to handle errors
    if (err) {
      console.log(err)
    return res.redirect("/show");
    }
    // for now, redirect right back to the "new" view
    res.redirect(`/${groceryList._id}`);
  });
}


function show(req, res) {
  GroceryList.find({}, function (err, groceryList) {
    res.render("grocery/show", { title: "All Grocery List", groceryList });
  });
  }

  function groceryList(req, res) {
    console.log(req.params.id)
    GroceryList.findById(req.params.id, function (err, groceryList) {
      GroceryItem.find({}, function(err, groceries) {
        GroceryItem.find().where('_id').in(groceryList.items).exec((err, records) => {
          console.log(groceryList)
          res.render("grocery/list", {groceryList, groceries, records});
        });
    
      
      });
    });
      
    }

    function createGrocery(req, res) {
      GroceryItem.find({}, function(err, groceries) {
        res.render('grocery/addgrocery', {
            title: 'Add Grocery',
            groceries
          });
    });
      }

      function addGrocery(req, res) {
        GroceryItem.create(req.body, function(err) {
          res.redirect('/creategrocery');
      });
        
      }

      function grocery(req, res) {
        GroceryList.findById(req.params.id, function(err, groceryList) {
          // push the performerId from req.body into the cast array of the found movie
          groceryList.items.push(req.body.groceryId);
          // save the movie document
          groceryList.save(function(err) {
              // res.redirect to the movie show page
              res.redirect(`/${groceryList._id}`);
          });
      });
              
      }





      