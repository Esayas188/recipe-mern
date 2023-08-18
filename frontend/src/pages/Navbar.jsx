import '../index.css';
import {Link } from 'react-router-dom';

const Navebar = () => {
    return ( 
        <div>
        <nav className="flex items-center  pb-2 ">
          <div className="flex-1  justify-center ">
            <div className="flex flex-row items-center ml-5">
              <img src="/img/stew.jpg" className=" rounded m-4 w-12 border-2" alt=""/>
              <h1 className="font-bold uppercase   ">
                <a href="#">delicious food</a>
              </h1>
            </div>
  
          </div>
  
          <div className="flex-1 ">
            <ul className="  flex flex-row justify-end">
              <li className="text-gray-700 font-bold pr-6  md:pr-16 lg:pr-24">
              <Link to={`/home`}>
                <span>Home</span>
              </Link>

              </li>
              <li className="pr-6 md:pr-16 lg:pr-24 ">
                <a href="#" >
                  <span>About</span>
                </a>
              </li>
              <li className=" pr-6 md:pr-16 lg:pr-24 ">
                <a href="#">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
  
        </nav>
  
      </div>
     );
}
 
export default Navebar;