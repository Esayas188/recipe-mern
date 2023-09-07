import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import { useState } from 'react';
import { useAuthContext } from '../hook/useAuthContext';
import { useLogout } from '../hook/useLogout';
import Contact from './Contact';


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
              <li className="text-[#011936] font-bold hover:text-[rgba(1,25,54,0.7)]">
                <Link to={`/`}>
                  <span>Home</span>
                </Link>
              </li>

              <li className="text-[#011936] hover:text-[rgba(1,25,54,0.7)] font-bold">
                <Link to={`/Home`}>
                  <span>Recipes</span>
                </Link>
              </li>
              <li className='text-[#011936] hover:text-[rgba(1,25,54,0.7)] font-bold'>
                <Link className='  ' to={`/Contact`}>
                    <p className=' hover:cursor-pointer '>Contact Us</p>

                </Link>
                
              </li>
 
              <li>
                <a href="#" className="text-[#011936] hover:text-[rgba(1,25,54,0.7)] font-bold">
                  Blog
                </a>
                
              </li>

              <li>
                <a href="#" className="text-[#011936] hover:text-[rgba(1,25,54,0.7)] font-bold">
                  About
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
        <section className="features   ">
          <h2 className="text-3xl text-center font-bold mt-8 mb-4">Our Features</h2>
          
      </section>


        <div className='  flex flex-col md:gap-16 sm:flex-row px-8 justify-center items-center  h-1/5'>
          <div className='sm:ml-10   sm:px-8  sm:w-[500px] md:w-3/5 flex flex-col  px-20  '>
              <p className="text-xl font-bold mb-2  ">Delicious Recipes</p>
              <p className="text-gray-600 ">Indulge in our diverse collection of mouthwatering dishes, carefully curated and tested for flavor and satisfaction. So come on in and let us take you on a culinary journey!</p>

          </div>
          <div className=' flex justify-center items-center'>
          <img className=' lg:w-5/6  w-full mt-16 sm:mb-0 rounded-2xl shadow-lg' src=" img/Screenshot (2).png " alt="image" />


          </div>

        </div>


        <div className='mt-16 flex flex-col sm:flex-row px-8 justify-center items-center  h-1/5'>
          <div className='flex justify-center items-center'>
          <img className=' min-w-[200px] w-3/4 md:w-3/5 sm:w-full mb-16 sm:mb-0 rounded-2xl shadow-lg' src=" img/Screenshot (4).png " alt="image" />


          </div>
          <div className='sm:ml-10 min-w-[200px]  sm:px-8  sm:w-[500px] md:w-3/5 flex flex-col  px-20  '>
              <p className="text-xl font-bold mb-2  ">Easy to Use</p>
              <p className="text-gray-600 ">Our website is intuitive and straightforward, ensuring a seamless experience in finding your desired recipes.</p>

          </div>
        </div>





        <div className=' mt-20 flex flex-col md:gap-16 sm:flex-row px-8 justify-center items-center  h-1/5'>
          <div className='sm:ml-10   sm:px-8  sm:w-[500px] md:w-3/5 flex flex-col  px-20  '>
              <p className="text-xl font-bold mb-2  ">Healthy Options</p>
              <p className="text-gray-600 ">Promoting a balanced lifestyle, we offer nutritious recipes with wholesome ingredients and mindful cooking techniques.</p>

          </div>
          <div className=' flex justify-center items-center'>
          <img className=' lg:w-5/6  w-full mt-16 sm:mb-0 rounded-2xl shadow-lg' src=" img/Screenshot (3).png " alt="image" />


          </div>

        </div>
        <div className='mt-[150px] flex flex-col justify-center items-center '>
          <div className='flex w-2/3 md:w-full justify-center items-center '>
          <p className=' mb-[50px]  text-lg md:text-xl lg:text-2xl font-light '>Come explore our website and find the perfect recipe for your next meal.</p>


          </div>
          <Link className=' md:px-0  mb-8' to={`/Home`}>
              <button className=' uppercase text-center tracking-[-1] py-3 px-24 font-bold   rounded-2xl  shadow-2xl bg-[rgba(1,25,54,1)]  hover:bg-[rgba(1,25,54,0.8)] text-white '>start here</button>

          </Link>
        </div>


      <Footer/>
      </div>
    </>
  );
};

export default Landing;