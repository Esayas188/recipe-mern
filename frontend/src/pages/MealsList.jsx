import '../index.css';
import { useState,useEffect } from "react"
import { useNavigate,Link } from 'react-router-dom';


const MealsList = ({pageNumber,id,categoryname}) => {
  const navigate = useNavigate()
  const pageNum = parseInt(pageNumber) || 1;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(pageNum);
  const [pages, setPages] = useState(1);
  const [_id, set_id] = useState(id);
  const [strcategoryname, setcategoryname] = useState(categoryname);


  const [meals, setmeals] = useState(null)


    useEffect(()=>{
      const fetchmeals=async()=>{
        setLoading(true);
        try {
          const response = await fetch(`http://localhost:4000/meals/${_id}?page=${page}`)
          const json = await response.json()  
          console.log('this is json.pages',json.pages)      
          setmeals(json.data)
          setPages(json.pages);
          setLoading(false);
          console.log('this the fetched data',json)
        
          
        } catch (error) {
          setLoading(false);
          setError(true);
          console.log('this is the main error: ',error)
        }
  
      }
  
      fetchmeals()
  
    },[page])

    return ( 

      <div className="px-16 py-6 ">
        <div >

          <div className="flex justify-center pt-2">
            <input type="text" className="flex-1 py-1 border-gray-400 text-sm  border pl-6 bg-white  max-w-lg  rounded-l-full"/>
            <a  className="bg-white rounded-r-full px-3 bg-gray border-2 hover:bg-gray-300 transition duration-500" href=""><span>icon</span></a> 
          </div>
        </div>
        <div>
          <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">{strcategoryname} Recipes</h4>
    
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">


            {/* <!-- cards go here --> */}

          {loading ? (
            

          <h3 className="loading-text">Loading...</h3>
        ) : error ? (
          <h3 className="error-text">Something went wrong</h3>
        ) : (
          meals &&
          meals.map((meal) => (
            <div
              key={meal._id}
              className="bg-gray-300 rounded overflow-hidden shadow-md relative"
            >

              <Link to={`/mealsdetail/${meal.strMeal}/${meal._id}`}>
              <img
                src={meal.strMealThumb}
                className="w-full h-32 object-cover sm:h-48"
                alt="Thumb"
              />


              </Link>
              <div className="h-full p-4 bg-white">
                <span className="font-bold">{meal.strMeal}</span>
                <span className="text-sm ml-2 font-light">Recipe by </span>
              </div>
            </div>
          ))
        )}

          </div>

          <div className="flex justify-center space-x-4 item center mt-8">

      <button className="pagination__prev disabled:bg-blue-300 bg-gray-200 rounded px-3 py-2"onClick={() => {

      setPage((page) => page - 1);
      navigate(`/meals/${strcategoryname}/${_id}?${page - 1}`);
  }}
  disabled={page === 1}>
  &#171;
</button>
<button
  className="pagination__next disabled:bg-blue-300 bg-gray-200 rounded px-3 py-2"
  onClick={() => {
    setPage((page) => page + 1);
    navigate(`/meals/${strcategoryname}/${_id}?${page + 1}`);
  }}
  disabled={page === pages}
>
  &#187; 
</button>
          </div>
        </div>


    </div>
     );
}
 
export default MealsList;