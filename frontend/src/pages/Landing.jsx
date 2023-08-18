import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <div className="w-screen min-h-screen font-[Poppins] overflow-hidden bg-[#f2f3f7]">
        <nav className="flex items-center h-16 bg-white top-0 fixed w-full px-4">
          <div className="flex-1 justify-center">
            <div className="flex items-center ml-2">
              <img src="/img/stew.jpg" className="rounded-full w-12 border-2" alt="" />
              <h1 className="font-bold text-xl ml-2">
                <a href="#">Delicious Food</a>
              </h1>
            </div>
          </div>
          <div className="flex-1">
            <ul className="flex flex-row justify-end space-x-6">
              <li className="text-gray-700 ">
                <Link to="/home" className="hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Recipes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Blog
                </a>
                
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  About
                </a>
                
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Contact
                </a>
                
              </li>

            </ul>
          </div>
        </nav>
        <div
          style={{ backgroundImage: "linear-gradient(rgba(1, 25, 54, 0.5), rgba(1, 25, 54, 0.5)), url('./img/one.jpg')" }}
          className="text-[#DCF3F0] bg-cover bg-center w-screen min-h-screen mt-12 flex items-center"
        >
          <div className="w-2/3 lg:w-1/2 flex flex-col mt-2 mx-auto">
            <h1 className="text-white text-5xl tracking-tighter text-center mb-4 ">Welcome to our food paradise!</h1>
            <div className='flex justify-centerlg:w-full mx-4 '>
            <p className="text-white   text-left tracking-tighter">We're passionate about food, and we want to share that passion with you. Come explore our website and find the perfect recipe for your next meal.</p>


            </div>
            <div className='flex mt-6 justify-center'>
              <button className=' uppercase tracking-[-1] py-3 px-8 bg-[#011936] shadow-sm hover:bg-[#021e3f] text-white '>start here</button>
            </div>
            
          

          </div>
        </div>
        <section class="features p-8 bg-gray-100">
          <h2 class="text-3xl text-center font-bold mb-8">Our Features</h2>
          <div class="flex justify-between space-x-2">
            <div class="feature-card text-center p-4 bg-white rounded-lg shadow-lg">
              <i class="fas fa-utensils text-4xl text-gray-800 mb-4"></i>
              <h3 class="text-lg font-bold mb-2">Easy to Use</h3>
              <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis diam in dolor
                scelerisque ullamcorper.</p>
            </div>
            <div class="feature-card text-center p-4 bg-white rounded-lg shadow-lg">
              <i class="fas fa-hamburger text-4xl text-gray-800 mb-4"></i>
              <h3 class="text-lg font-bold mb-2">Delicious Recipes</h3>
              <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis diam in dolor
                scelerisque ullamcorper.</p>
            </div>
            <div class="feature-card text-center p-4 bg-white rounded-lg shadow-lg">
              <i class="fas fa-leaf text-4xl text-gray-800 mb-4"></i>
              <h3 class="text-lg font-bold mb-2">Healthy Options</h3>
              <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis diam in dolor
                scelerisque ullamcorper.</p>
            </div>
          </div>

      </section>
      <div className='bg-gray-200 h-72 w-full'>

      </div>
      </div>
    </>
  );
};

export default Landing;