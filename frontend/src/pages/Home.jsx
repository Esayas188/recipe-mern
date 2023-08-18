import { useParams } from 'react-router-dom';
import '../index.css';
import CategoryList from './CategoryList';
import Navbar from './Navbar';
import { useNavigate,Link } from 'react-router-dom';
import { useAuthContext } from '../hook/useAuthContext'
import { useLogout } from '../hook/useLogout'

const Home = () => {
  const {pageNumber} = useParams()
  const { user } = useAuthContext()
  const { logout } = useLogout()
  const handleClick=()=>{
    logout()

  };
  return (
    
    <div className="text-gray-600 ">
      <div className="bg-gray-50">
        <Navbar/>

        <main >
          <div className="flex flex-row justify-end pr-10 md:pr-24 py-4 lg:pr-32 pl-16">
            {user && (
              <div>
                <span className='mx-2'>{user.email}</span>
                <button className="py-1 px-2 bg-blue-300 rounded-full  border-blue-300 border-2 hover:border-2 cursor-pointer hover:border-blue-300 hover:bg-white transition duration-500 uppercase mr-2" onClick={handleClick}>Log out</button>
              </div>
            )}
            {!user && (
              <>
                <Link to={`/login`}>
                  <a className="py-1 px-2 bg-blue-300 rounded-full  border-blue-300 border-2 hover:border-2 cursor-pointer hover:border-blue-300 hover:bg-white transition duration-500 uppercase mr-2" >Login</a>
                </Link>
                <Link to={`/signup`}>
                <a className="py-1 px-2 bg-blue-300 rounded-full  border-blue-300 border-2 hover:border-2 cursor-pointer hover:border-blue-300 hover:bg-white transition duration-500 uppercase " >Signup</a>

                </Link>
              </>

            )}

            
          </div>

        <CategoryList pageNumber={pageNumber}/>

      
        </main>
      </div>

    </div>
    );
}
 
export default Home;

