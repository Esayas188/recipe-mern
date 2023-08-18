const express = require('express');
const router = express.Router();
const {ListCategory,Meals,MealDetail} = require('../controllers/Recipes')

router.get('/',ListCategory);
router.get('/:id',Meals);
router.get('/detail/:id',MealDetail);



module.exports = router;