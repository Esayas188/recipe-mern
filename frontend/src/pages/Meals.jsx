
import { useParams } from 'react-router-dom';
import '../index.css';
import MealsList from './MealsList';
import Navbar from './Navbar';

const Meals = () => {
  const {pageNumber,id,categoryname} = useParams()
  return (
    
    <div className="text-gray-600 ">
      <div className="">
        <Navbar/>
        <main >
          <div className="flex flex-row justify-end pr-10 md:pr-24 py-4 lg:pr-32 pl-16">
            <a className="py-1 px-2 bg-blue-300 rounded-full  border-blue-300 border-2 hover:border-2 cursor-pointer hover:border-blue-300 hover:bg-white transition duration-500 uppercase mr-2" href="#">Log in</a>
            <a className="py-1 px-2 bg-blue-300 rounded-full  border-blue-300 border-2 hover:border-2 cursor-pointer hover:border-blue-300 hover:bg-white transition duration-500 uppercase " href="#">Sign up</a>
          </div>

        <MealsList pageNumber={pageNumber} id={id} categoryname={categoryname}/>

      
        </main>
      </div>

    </div>
    );
}
 
export default Meals;

