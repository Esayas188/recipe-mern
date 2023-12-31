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

  const [searchQuery, setSearchQuery] = useState("");
  const [meals, setmeals] = useState(null)


    useEffect(()=>{
      const fetchmeals=async()=>{
        setLoading(true);
        try {
          const response = await fetch(`https://recipe-one.onrender.com/meals/${_id}?page=${page}&search=${searchQuery}`)
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
  
    },[page,searchQuery])
    const handleSearch = () => {
      setPage(1); // Reset page number when performing a new search
    };

    return ( 

      <div className="px-16 py-6  ">
        <div >

          <div className="search flex justify-center items-center ">
            
            <input type="text" value={searchQuery}   onChange={(e) => {
              setSearchQuery(e.target.value);
              handleSearch(); 
            }} 
            className="flex-1 px-6 py-4 h-7 text-sm text-slate-600 border-gray-400 border bg-white max-w-lg rounded-l-full"/>
              
            <div onClick={handleSearch} className='flex justify-center ml-2   border hover:cursor-pointer py-4 px-3 hover:bg-[rgba(1,25,54,0.8)] bg-[#011936]  h-7 rounded-r-full items-center'>
              <span class="material-symbols-outlined    text-[#DCF3F0]  " >search</span> 

            </div>
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
              className="bg-gray-300 rounded overflow-hidden shadow-md "
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
        {(!meals && !loading && <p>No meal to display</p> ) 
             
         }



          </div>

          <div className="flex justify-center space-x-4 item center mt-8">

      <button className="pagination__prev disabled:bg-[#011936] bg-gray-200 disabled:text-[#DCF3F0] rounded px-3 py-2"onClick={() => {

      setPage((page) => page - 1);
      navigate(`/meals/${strcategoryname}/${_id}?${page - 1}`);
  }}
  disabled={page === 1}>
  &#171;
</button>
<button
  className="pagination__next disabled:bg-[#011936] disabled:text-[#DCF3F0] bg-gray-200 rounded px-3 py-2"
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