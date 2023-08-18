
import { useParams } from 'react-router-dom';
import '../index.css';
import Navbar from './Navbar';
import MealsDetailList from './MealsDetailList'

const MealsDetail = () => {
  const {id,mealname} = useParams()
  return (
    
    <div className=" ">
      <div className="">
        <Navbar/>
        <main >


        <MealsDetailList id={id} mealname={mealname}/>

      
        </main>
      </div>

    </div>
    );
}
 
export default MealsDetail;

