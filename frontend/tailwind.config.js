/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.js","./src/pages/Home.jsx","./src/pages/CategoryList.jsx","./src/pages/Navbar.jsx","./src/pages/pagination.jsx","./src/pages/MealsList.jsx","./src/pages/MealsDetail.jsx","./src/pages/MealsDetailList.jsx","./src/pages/Landing.jsx","./src/authcomponent/Login.jsx","./src/authcomponent/Signup.jsx","./src/pages/Footer.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        'my-image': "url('/public/img/civil.png')",
      },
    },
  },
  plugins: [],
}

