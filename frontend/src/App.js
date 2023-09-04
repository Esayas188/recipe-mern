import './index.css';


import { BrowserRouter,Navigate, Routes, Route } from "react-router-dom";

import { useAuthContext } from './hook/useAuthContext'

import Home from './pages/Home';
import Meals from './pages/Meals';
import MealsDetail from './pages/MealsDetail';
import Login from './authcomponent/Login'
import Signup from './authcomponent/Signup'

import Landing from './pages/Landing';

function App() {
  const { user } = useAuthContext()
  console.log('hellow here is the state of user ',user)

  return (
    <BrowserRouter>
    
      <Routes>
        <Route  path="/" element={<Landing/>}/>
        <Route  path="home/:pageNumber" element={user? <Home/> : <Login />}/>
        <Route  path="home/" element={user? <Home/> : <Login />}/>
        
        <Route  path="meals/:categoryname/:id/:pageNumber"element={user ? <Meals/> : <Login />}/>
        <Route  path='meals/:categoryname/:id' element={user ? <Meals/> : <Login />}/>
        
        <Route path='mealsdetail/:mealname/:id' element={user ? <MealsDetail/> : <Login />} />
        <Route 
              path="login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
