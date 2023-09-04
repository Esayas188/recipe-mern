const {Meal,Mealdetail,Category} = require('../models/data')
const mongoose = require('mongoose')
const ListCategory = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const pageSize = parseInt(req.query.limit) || 6;
      const skip = (page - 1) * pageSize;
      const total = await Category.countDocuments();
      const pages = Math.ceil(total / pageSize);
      const categories = await Category.find().skip(skip).limit(pageSize);
  
      if (categories) {
        if(page > pages){

          return res.status(404).json({
                status:'fail',
                message:'no page found',
            })
        }


        res.status(200).json({
          status: 'success',
          count: categories.length,
          page,
          pages,
          data: categories,
        });
      }
    } catch (error) {
      console.error(error); // Log the error for debugging purposes
      res.status(500).json({ error: 'Something went wrong' }); // Send an appropriate error response to the client
    }
  };
const Meals = async(req,res)=>{
  const id = req.params.id
  const searchQuery = req.query.search || '';

  try {
    let query = { category: id };
    
    if (searchQuery) {
      query = {
        ...query,
        $or: [
          { strMeal: { $regex: searchQuery, $options: 'i' } },
        ]
      };
    }

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 6;
    const skip = (page - 1) * pageSize;
    const total = await Meal.countDocuments(query);
    const pages = Math.ceil(total / pageSize);
    const meals = await Meal.find(query).skip(skip).limit(pageSize);
    if (meals) {
      if(page > pages){

        return res.status(404).json({
              status:'fail',
              message:'no page found',
          })
      }


      res.status(200).json({
        status: 'success',
        count: meals.length,
        page,
        pages,
        data: meals,
      });
    }

    
  } catch (error) {
    console.log('error is ',error)
  }

}

const MealDetail = async(req,res)=>{
  const id = req.params.id
  try {
    const mealdetail = await Mealdetail.find({strMeal:id});
    if (!mealdetail) {

        return res.status(404).json({
              status:'fail',
              message:'no page found',
          })
      }
    res.status(200).json({
        status: 'success',
        data: mealdetail,
      });
    
  } catch (error) {
    console.log('error is ',error)
    
  }

}

module.exports ={
    ListCategory,
    Meals,
    MealDetail
}
