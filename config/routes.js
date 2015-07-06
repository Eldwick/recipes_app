var express = require('express');
var router = express.Router();
var Recipe = require('recipes');

/* GET home page. */
router.get('/', Recipe.index);


router.post('/recipes', function(req, res, next) {
  var startingRecipe = new Recipe(req.body);

  startingRecipe.save().then(function(data){
    res.redirect('/');
  });
});


module.exports = router;
