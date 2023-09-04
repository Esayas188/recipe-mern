import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import { useState } from 'react';
import { useAuthContext } from '../hook/useAuthContext';
import { useLogout } from '../hook/useLogout';

const Landing = () => {
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
    <>
      <div className="w-screen min-h-screen font-[Poppins] text-[#011936] overflow-hidden bg-[#f2f3f7]">
      <div>
         <nav className="flex flex-col pb-8 md:pb-0 pt-4 justify-center md:flex-row md:items-center  md:h-16 min-h-[80px]    w-screen px-4">
     
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
              <li className="text-[#011936] font-bold ">
                <Link to={`/`}>
                  <span>Home</span>
                </Link>
              </li>
              <li className="text-[#011936] font-bold">
                <Link to={`/Home`}>
                  <span>Recipes</span>
                </Link>
              </li>
 
              <li>
                <a href="#" className="text-[#011936] font-bold">
                  Blog
                </a>
                
              </li>
              <li>
                <a href="#" className="text-[#011936] font-bold">
                  About
                </a>
                
              </li>
              <li className='text-[#011936] font-bold'>
                <a href="#">
                  Contact
                </a>
                
              </li>
              <li>
              {user && (
                <div>
                  <button className="py-2 px-3  bg-[#011936] shadow-lg text-[#DCF3F0]  rounded-md cursor-pointer  hover:bg-[#1b3452] " onClick={handleClick}>Log out</button>
                </div>
              )}
              {!user && (
                <>
                  <Link to={`/login`}>
                    <a className="py-2 px-3  bg-[#011936] shadow-lg text-[#DCF3F0] rounded-md cursor-pointer  hover:bg-[#1b3452] mr-2" >Login</a>
                  </Link>
                  <Link className='pb-6 sm:  md:' to={`/signup`}>
                  <a className="py-2 px-3  bg-[#011936] shadow-lg  text-[#DCF3F0] rounded-md cursor-pointer  hover:bg-[#1b3452] " >Signup</a>

                  </Link>
                </>

              )}

              

              </li>


            </ul>
          </div>
        </nav>

  
      </div>

        <div className="text-[#011936] bg-cover bg-center w-screen min-h-[500px]  grid sm:grid-cols-1 md:grid-cols-4  lg:grid-cols-5  px-16 md:pr-0 md:items-center pb-10">
          <div className=" pt-20 md:pt-0  flex flex-col mt-2   col-span-2 ">

            <p className="  px-8 md:px-0  md:text-left text-[#011936] text-4xl sm:text-5xl font-extrabold sm:leading-[56px] ">Master your cooking skill like a <p className='text-[#336bb1]'>chef.</p> </p>
              
            <p className=" text-left px-8 md:px-0 md:text-left text-[#011936] font-medium pb-6 "> Come explore our website and find the perfect recipe for your next meal.</p>

            <Link className='px-8 md:px-0' to={`/Home`}>
                <button className=' uppercase tracking-[-1] py-3 px-8 bg-[#011936] border-white border rounded-md shadow-sm hover:bg-[rgba(2,30,63,0.9)] text-white '>start here</button>

            </Link>

          </div>
          <div className=' md:col-span-2 lg:col-span-3 hidden md:block '>
          <img className='w-full' src="/img/chef.png" alt="Image" />
          </div>
        </div>
        <section className="features  p-8 ">
          <h2 className="text-3xl text-center font-bold mb-8">Our Features</h2>
          <div className=" grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4">
            <div className="feature-card text-center p-4 bg-white rounded-lg shadow-lg">
              <i className="fas fa-utensils text-4xl text-gray-800 mb-4"></i>
              <h3 className="text-lg font-bold mb-2">Easy to Use</h3>
              <p className="text-gray-600"> Our website is intuitive and straightforward, ensuring a seamless experience in finding your desired recipes.</p>
            </div>
            <div className="feature-card text-center p-4 bg-white rounded-lg shadow-lg">
              <i className="fas fa-hamburger text-4xl text-gray-800 mb-4"></i>
              <h3 className="text-lg font-bold mb-2">Delicious Recipes</h3>
              <p className="text-gray-600">Indulge in our diverse collection of mouthwatering dishes, carefully curated and tested for flavor and satisfaction.</p>
            </div>
            <div className="feature-card text-center p-4 bg-white rounded-lg shadow-lg">
              <i className="fas fa-leaf text-4xl text-gray-800 mb-4"></i>
              <p className="text-lg font-bold mb-2">Healthy Options</p>
              <p className="text-gray-600 ">Promoting a balanced lifestyle, we offer nutritious recipes with wholesome ingredients and mindful cooking techniques.</p>
            </div>
          </div>

      </section>

      <div className=' mt-[50px]  min-h-screen w-full'>
        <div className=' p-14 flex justify-center  w-full  '>
          <form action="" className='flex flex-col justify-center items-center space-y-6  '>
          <p className='text-[#011936] text-3xl font-bold'>Contact us</p>
          <div className='m-2 text-sm w-full' ><input className='px-4 py-2 w-full rounded-md ' type="text" placeholder='Enter Your Name' /></div>
          <div className='m-2 text-sm w-full' ><input className='py-2 px-4 w-full rounded-md' type="text" placeholder='Enter Your Email' /></div>
          <textarea   rows="6" placeholder='Your Message' className='py-2 px-4 w-full rounded-md resize-none'></textarea>
          <button className='hover:bg-[#042855] rounded-xl text-white bg-[#011936] px-4 py-2 m-2 w-full '> submit</button>


          </form>

        </div>
        <Footer/>

        

      

      </div>
      </div>
    </>
  );
};

export default Landing;