import { useParams } from 'react-router-dom';
import '../index.css';
import CategoryList from './CategoryList';
import Navbar from './Navbar';
import { useNavigate,Link } from 'react-router-dom';
import { useAuthContext } from '../hook/useAuthContext'
import { useLogout } from '../hook/useLogout'
import Footer from './Footer';

const Home = () => {
  const {pageNumber} = useParams()
  const { user } = useAuthContext()
  const { logout } = useLogout()
  const handleClick=()=>{
    logout()

  };
  return (
    
    <div className="text-[#011936] font-[Poppins] bg-slate-100 ">
      <div className="">
        <Navbar/>


          <div className="flex  flex-row justify-end  mt-12 pt-16  py-4 pr-20 pl-16">
            {user && (
              <div>
                <span className='mx-2 hidden md:inline'>{user.email}</span>
                <button className="py-2 px-3 bg-[#011936] hidden md:inline text-[#DCF3F0]  rounded-md cursor-pointer  hover:bg-[#0a2a52] mr-2" onClick={handleClick}>Log out</button>
              </div>
            )}

          </div>

        <CategoryList pageNumber={pageNumber}/>
        <Footer/>


      

      </div>

    </div>
    );
}
 
export default Home;

