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

  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Landing/>}/>

        <Route path='home/:pageNumber' element={user ? <Home/> : <Navigate to="/login" />}/>
        <Route path='home/'element={user ? <Home/> : <Navigate to="/login" />}/>
        
        <Route exact path="meals/:categoryname/:id/:pageNumber"element={user ? <Meals/> : <Navigate to="/login" />}/>
        <Route exact path='meals/:categoryname/:id' element={user ? <Meals/> : <Navigate to="/login" />}/>
        
        <Route path='mealsdetail/:mealname/:id' element={user ? <MealsDetail/> : <Navigate to="/login" />} />
        <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
