import { useState } from 'react';
import '../index.css';
import {Link } from 'react-router-dom';
import { useAuthContext } from '../hook/useAuthContext'
import { useLogout } from '../hook/useLogout'

const Navbar = () => {

  const { user } = useAuthContext()
  const { logout } = useLogout()
  const handleClick=()=>{
    logout()

  };
    const [menuOpen, setMenuOpen] = useState(true); // State to track if the menu is open or closed

    const toggleMenu = () => {
      setMenuOpen(!menuOpen); // Toggle the menuOpen state
      console.log('this is clicked clicked clicked clicked clicked....')
    };

    return ( 
        <div>
         <nav className="flex flex-col pb-8 md:pb-0 pt-4 justify-center md:flex-row md:items-center  md:h-16 min-h-[80px] bg-[#011936] fixed top-0 text-[#DCF3F0] w-screen px-4">
     
            <div className="flex  md:pt-0 justify-between ml-2 ">
              <Link to={'/'}>
                <p className="font-bold text-xl ml-2">Delicious Food</p>
              </Link>
              {menuOpen ? (
                  <span className=" font-bold text-xl ml-2 pr-4 md:hidden hover:cursor-pointer material-symbols-outlined"  onClick={toggleMenu}>menu</span>
                ) : (
                  <span className="font-bold text-xl ml-2 pr-4 md:hidden hover:cursor-pointer material-symbols-outlined"  onClick={toggleMenu}>close</span>
                )}


            </div>
         
          <div className={`file flex-1 justify-center items-center  md:inline   ${menuOpen ? 'hidden' : 'active'}`}>
            <ul className="flex flex-col md:pr-4 md:flex-row justify-center p-4 md:p-0 md:space-y-0  items-center md:justify-end space-y-6 md:space-x-6">
              <li className="hover:text-[#9cb6b2] ">
                <Link to={`/`}>
                  <span>Home</span>
                </Link>
              </li>
              <li className="hover:text-[#9cb6b2] ">
                <Link to={`/Home`}>
                  <span>Recipes</span>
                </Link>
              </li>
 
              <li>
                <a href="#" className="hover:text-[#9cb6b2]">
                  Blog
                </a>
                
              </li>
              <li>
                <a href="#" className="hover:text-[#9cb6b2]">
                  About
                </a>
                
              </li>
              <li>
                <a href="#" className="">
                  Contact
                </a>
                
              </li>
              <li>
              {user && (
                <div>
                  <button className="py-2 px-3 md:hidden bg-[#2c5b94] shadow-lg text-[#DCF3F0]  rounded-md cursor-pointer  hover:bg-[rgba(1,25,54,0.8)] " onClick={handleClick}>Log out</button>
                </div>
              )}
              {!user && (
                <>
                  <Link to={`/login`}>
                    <a className="py-2 px-3 md:hidden bg-[#2c5b94] shadow-lg text-[#DCF3F0] rounded-md cursor-pointer  hover:bg-[rgba(1,25,54,0.8)] mr-2" >Login</a>
                  </Link>
                  <Link className='pb-6 sm:  md:' to={`/signup`}>
                  <a className="py-2 px-3 md:hidden bg-[#2c5b94] shadow-lg  text-[#DCF3F0] rounded-md cursor-pointer  hover:bg-[rgba(1,25,54,0.8)] " >Signup</a>

                  </Link>
                </>

              )}

              

              </li>


            </ul>
          </div>
        </nav>

  
      </div>
     );
}
 
export default Navbar;