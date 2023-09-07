import Navbar from "./Navbar";
import Footer from './Footer'
const Contact = () => {
    return (
        <>
        <Navbar/>
        <div className=' mt-[150px] min-w-[300px] min-h-screen w-full  '>
            <div className=' p-14 flex justify-center  w-full   '>
            <form action="" className='flex flex-col justify-center items-center space-y-6 bg-[rgba(1,25,54,0.3)] p-12 rounded-xl '>
            <p className='text-[#011936] text-3xl font-bold'>Contact us</p>
            <div className='m-2 text-sm w-full' ><input className='px-4 py-2 w-full rounded-md ' type="text" placeholder='Enter Your Name' /></div>
            <div className='m-2 text-sm w-full' ><input className='py-2 px-4 w-full rounded-md' type="text" placeholder='Enter Your Email' /></div>
            <textarea   rows="6" placeholder='Your Message' className='py-2 px-4 w-full rounded-md resize-none'></textarea>
            <button className='hover:bg-[#042855] rounded-xl text-white bg-[#011936] px-4 py-2 m-2 w-full '> submit</button>


            </form>

            </div>
      </div>
      <Footer/>
        </>
      );
}
 
export default Contact;