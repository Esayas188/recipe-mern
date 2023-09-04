
import { useParams } from 'react-router-dom';
import '../index.css';
import Navbar from './Navbar';
import Footer from './Footer';

import MealsDetailList from './MealsDetailList'
import { useAuthContext } from '../hook/useAuthContext';
import { useLogout } from '../hook/useLogout';

const MealsDetail = () => {
  const { user } = useAuthContext()
  const { logout } = useLogout()
  const handleClick=()=>{
    logout()

  };
  const {id,mealname} = useParams() 
  return (
    
    <div className="text-[#011936] font-[Poppins] mt-12  ">
      <div className="">
        <Navbar/>
        <main >
        <div className="flex  flex-row justify-end  mt-12 pt-16  py-4 pr-20 pl-16">
            {user && (
              <div>
                <span className='mx-2 hidden md:inline'>{user.email}</span>
                <button className="py-2 px-3 bg-[#011936] hidden md:inline text-[#DCF3F0]  rounded-md cursor-pointer  hover:bg-[rgba(1,25,54,0.8)] mr-2" onClick={handleClick}>Log out</button>
              </div>
            )}

          </div>


        <MealsDetailList id={id} mealname={mealname}/>
        <Footer/>

      
        </main>
      </div>

    </div>
    );
}
 
export default MealsDetail;

