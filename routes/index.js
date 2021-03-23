// const express = require('express');
// const router = express.Router();


// router.get('/', function(req, res, next) {
//     res.render("index");
//   });
  
//   module.exports = router;



  const express = require('express');
  const router = express.Router();
  const groceryListCtrl = require('../controllers/groceryList');

  
  
  router.get('/', groceryListCtrl.index);
  router.get('/new', groceryListCtrl.new);
//   router.get('/:id', moviesCtrl.show);
  router.post('/', groceryListCtrl.create);
  
  
  module.exports = router;