import '../index.css';
import { useState,useEffect } from "react"
import { useNavigate,Link } from 'react-router-dom';


const CategoryList = ({pageNumber}) => {
  const navigate = useNavigate()
  const pageNum = parseInt(pageNumber) || 1;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(pageNum);
  const [pages, setPages] = useState(1);
  const [categories, setcategories] = useState(null)


    useEffect(()=>{
      const fetchcategories=async()=>{
        setLoading(true);
        try {
          const response = await fetch(`https://recipe-one.onrender.com/meals?page=${page}`)
          const json = await response.json()  
          console.log('this is json.pages',json.pages)      
          setcategories(json.data)
          setPages(json.pages);
          setLoading(false);
          console.log('this the fetched data',json)
        
          
        } catch (error) {
          setLoading(false);
          setError(true);
          console.log('this is the main error: ',error)
        }
  
      }
  
      fetchcategories()
  
    },[page])

    return ( 

      <div className="px-16 py-6 bg-slate-100 min-h-screen">

        <div>
          <p className="font-bold pb-4 text-2xl sm:text-3xl mt-12 border-b border-[#011936]">Latest Recipe categories</p>
    
          <div className="mt-8 grid grid-cols-1  gap-10">


            {/* <!-- cards go here --> */}

          {loading ? (
            

          <h3 className="loading-text">Loading...</h3>
        ) : error ? (
          <h3 className="error-text">Something went wrong</h3>
        ) : (
          categories &&
          categories.map((category) => (

            <div key={category._id} className=" bg-white flex md:flex-row flex-col items-center p-12  rounded overflow-hidden ">
              <div className=''>
                <Link to={`/meals/${category.strCategory}/${category._id}/1`}>
                <img
                  src={category.strCategoryThumb}
                  className="w-full h-32 object-cover sm:h-48"
                  alt="Thumb"
                />
                </Link>

              </div>
              <div className=' bg-[#011936] hidden md:block  ml-4 w-1 h-4/5'>

              </div>
              <div className="h-full flex-1 p-4  border-[#011936] items-center ">
                <Link to={`/meals/${category.strCategory}/${category._id}/1`}>
                  <p className="font-bold text-xl mb-4 border-b-2 border-[#011936] ">{category.strCategory}</p>
                </Link>


                
                <p className=' text-sm '>{category.strCategoryDescription}</p>
              </div>
              
            </div>



          ))
        )}

          </div>

          <div className="flex justify-center space-x-4 item center mt-8">

      <button className="pagination__prev disabled:bg-[#011936] disabled:text-[#DCF3F0] bg-gray-200 rounded px-3 py-2"onClick={() => {
        setPage((page) => page - 1);
        navigate(`/home/${page - 1}`);
      }}
      disabled={page === 1}>&#171;</button>
<button
  className="pagination__next disabled:bg-[#011936] disabled:text-[#DCF3F0] bg-gray-200 rounded px-3 py-2"
  onClick={() => {
    setPage((page) => page + 1);
    navigate(`/home/${page + 1}`);
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
 
export default CategoryList;