const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  idCategory: String,
  strCategory: String,
  strCategoryThumb:String,
  strCategoryDescription:String,
  })

const mealSchema = new mongoose.Schema({
  strMeal:String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
    },
  strMealThumb:String,
  idMeal:String
})
const mealdetailSchema = new mongoose.Schema({
  strMeal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
    },
  idMeal:String,
  strDrinkAlternate:String,
  strCategory:String,
  strArea: String,
  strInstructions:String,
  strMealThumb:String,
  strTags: [String],
  strYoutube:String,
  strIngredient:[String],
  strMeasure:[String],

})
const Mealdetail = mongoose.model('Mealdetail', mealdetailSchema);
const Meal = mongoose.model('Meal', mealSchema);
const Category = mongoose.model('Category', categorySchema);



module.exports = {Meal,Category,Mealdetail};