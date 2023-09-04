
import { useParams } from 'react-router-dom';
import '../index.css';
import MealsList from './MealsList';
import Navbar from './Navbar';
import { useAuthContext } from '../hook/useAuthContext';
import { useLogout } from '../hook/useLogout';
import Footer from './Footer';

const Meals = () => {
  const {pageNumber,id,categoryname} = useParams()
  
  const { user } = useAuthContext()
  const { logout } = useLogout()
  const handleClick=()=>{
    logout()

  };
  return (
    <>
      <Navbar/>
      <div className="flex  flex-row justify-end  mt-12 pt-16  py-4 pr-20 pl-16">
            {user && (
              <div>
                <span className='mx-2 hidden md:inline'>{user.email}</span>
                <button className="py-2 px-3 bg-[#011936] hidden md:inline text-[#DCF3F0]  rounded-md cursor-pointer  hover:bg-[rgba(1,25,54,0.8)] mr-2" onClick={handleClick}>Log out</button>
              </div>
            )}

          </div>
      <div className="text-[#011936] ">
        <MealsList pageNumber={pageNumber} id={id} categoryname={categoryname}/>
      </div>
      <Footer/>

    </>
    

    );
}
 
export default Meals;

