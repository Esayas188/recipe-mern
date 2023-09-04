import '../index.css';

import { useState,useEffect } from "react"
import { useNavigate } from 'react-router-dom';


const MealsDetailList = ({id,mealname}) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [_id, setid] = useState(id);
  const [mealsdetail, setmealsdetail] = useState(null)
  const [result, setresult] = useState(null)
  


    useEffect(()=>{
      const fetchmealsdetail= async()=>{
        setLoading(true);
        try {
          console.log('before fetching data')
          const response = await fetch(`http://localhost:4000/meals/detail/${_id}`)
          const json = await response.json()  
          setmealsdetail(json.data)
          setLoading(false);
          console.log('this the fetched data',json)
        
          
        } catch (error) {
          setLoading(false);
          setError(true);
          console.log('this is the main error: ',error)
        }
  
      }
  
      fetchmealsdetail()
  
    },[])
    useEffect(()=>{
      console.log('this is the mealsdetail state',mealsdetail)
    },mealsdetail)
    useEffect(() => {
      if (mealsdetail && mealsdetail.length > 0) {
        const updatedResult = [];
        for (let i = 0; i < mealsdetail[0].strIngredient.length; i++) {
          if (!mealsdetail[0].strIngredient[i]) {
            break;
          }
          updatedResult.push(mealsdetail[0].strIngredient[i] + " | " + mealsdetail[0].strMeasure[i]);
        }
        setresult(updatedResult);
      }
    
      console.log(result);
      console.log('this is the value of mealsdetail', mealsdetail);
    }, [mealsdetail]);
    useEffect(()=>{
      console.log('this is the value of result: ',result)
    },[result])

    return ( 

      <div className="px-16 py-6  ">

        <div>
          {/* <p className="font-bold  mt-6  uppercase text-center">welcome to detail Recipe</p> */}
    
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-5  gap-6">



            {/* <!-- cards go here --> */}

          {loading ? (
            

          <h3 className="loading-text">Loading...</h3>
        ) : error ? (
          <h3 className="error-text">Something went wrong</h3>
        ) : (mealsdetail && mealsdetail.length > 0 && (
          <>
          <div className='sm:col-span-2 flex  '>
            <div className='flex flex-col gap-2 overflow-hidden '>
              <div className=' overflow-hidden'>
              <img  className='rounded-md h-56 sm:h-72 w-full object-cover ' src={mealsdetail[0].strMealThumb} alt="image" />


              </div>
          
              <div className='  pt-2 p-4 border rounded-md' >
                <p className=" font-medium pl-4 pt-2  ">Ingredients:</p>
                <ul className='flex flex-wrap'>
                  {
                    
                    result && result.map((item)=>{
                      return(
                        <>
                          <li className='p-2 ml-2 mt-2 rounded-xl bg-gray-100' key={item._id}>{item}</li>
                        </>
                      )

                    })

                  }
                </ul>
                <div>
                  <p className='font-medium pl-4 pt-2'>Area</p>
                  <div className="flex">
                    <p className='p-2 m-2 rounded-xl  bg-gray-100'>{mealsdetail[0].strArea}</p>
                  </div>

                </div>

              </div>
            </div>




          </div>

          <div className="sm:col-span-3 grid-2 rounded-lg border border-gray-200 w-full h-full">
          <p className="font-bold  mt-6  uppercase text-center">{mealname}</p>
          <p className='p-8 mx-4 leading-8 text-gray-600' >{mealsdetail[0].strInstructions}.</p>
          





          </div>
          </>


          

        )
        )}

          </div>

 
        </div>


    </div>
     );
}
 
export default MealsDetailList;