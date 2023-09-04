## this is what use to fetch data from the api 
app.get('/meals', async (req, res) => {
  try {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    const categoryList = response.data.categories;
    const categoryDocuments = categoryList.map(category => new Category({ ...category }));
    await Category.insertMany(categoryDocuments);
    res.send('Meals data has been stored in the MongoDB collection.');
  } catch (error) {
    console.log('An error occurred:', error);
    res.status(500).send('An error occurred while retrieving the meal data.');
  }
});

## this is also i used to fetch data from api 
app.get('/meals', async (req, res) => {
  try {
    const category = await Category.find();

    for (const item of category) {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${item.strCategory}`);
      const data = await response.json();
      const mealsdata = data.meals

      if (mealsdata){
        for (const mealdata of mealsdata){
          const meal = new Meal({
            ...mealdata,category:item._id
          });
          await meal.save();

        }
      }
    }
    res.send('all data is saved to database ');
  } catch (error) {
    console.log('An error occurred:', error);
    res.status(500).send('An error occurred while retrieving the meal data.');
  }
});

//Route to retrieve the meal data from the API and store it in the MongoDB collection

app.get('/meals', async (req, res) => {
  try {
    const meal = await Meal.find();

    for (const item of meal) {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item.strMeal}`);
      const data = await response.json();
      const mealsdata = data.meals
      console.log('this is the detail:',mealsdata);

      if (mealsdata){
        const mealData = mealsdata[0]; 
        const mealdetail = new Mealdetail({
          ...mealData,
          strMeal:item._id,
          strIngredient: [
            mealData.strIngredient1,
            mealData.strIngredient2,
            mealData.strIngredient3,
            mealData.strIngredient4,
            mealData.strIngredient5,
            mealData.strIngredient6,
            mealData.strIngredient7,
            mealData.strIngredient8,
            mealData.strIngredient9,
            mealData.strIngredient10,
            mealData.strIngredient11,
            mealData.strIngredient12,
            mealData.strIngredient13,
            mealData.strIngredient14,
            mealData.strIngredient15,
            mealData.strIngredient16,
            mealData.strIngredient17,
            mealData.strIngredient18,
            mealData.strIngredient19,
            mealData.strIngredient20,
          ],
          strMeasure: [
            mealData.strMeasure1,
            mealData.strMeasure2,
            mealData.strMeasure3,
            mealData.strMeasure4,
            mealData.strMeasure5,
            mealData.strMeasure6,
            mealData.strMeasure7,
            mealData.strMeasure8,
            mealData.strMeasure9,
            mealData.strMeasure10,
            mealData.strMeasure11,
            mealData.strMeasure12,
            mealData.strMeasure13,
            mealData.strMeasure14,
            mealData.strMeasure15,
            mealData.strMeasure16,
            mealData.strMeasure17,
            mealData.strMeasure18,
            mealData.strMeasure19,
            mealData.strMeasure20,
          ],

          });
          await mealdetail.save();

      }
    }
    res.send('all data is saved to database ');
    } 
    catch (error) {
      console.log('An error occurred:', error);
      res.status(500).send('An error occurred while retrieving the meal data.');
    }
});