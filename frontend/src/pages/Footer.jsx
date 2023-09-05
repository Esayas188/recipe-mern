 const Footer = () => {
    return ( 
        <div className='w-full min-h-[300px] pt-6 mt-[150px] bg-[rgba(1,25,54,0.9)] text-white pb-5'>
          <div className='grid w-full min-h-72 gap-4 sm:grid-cols-3 items-center px-14'>
            <div className='h-3/4'>
              <p className='text-center font-bold'>About</p>
            </div>
            <div className='h-3/4 '>
              <p className='text-center font-bold'>Support</p>
              <div className='flex flex-col items-center justify-center p-2 space-y-4'>
                <p className=' hover:cursor-pointer'>Contact Us</p>
              </div>

            </div>
            <div className='h-3/4 '>
              <p className='text-center font-bold'>Social</p>
              <div className='flex flex-col items-center justify-center p-2 space-y-4'>
                <p className=' hover:cursor-pointer'>Facebook</p>
                <p className=' hover:cursor-pointer'>Twitter</p>
                <p className=' hover:cursor-pointer'>Instagram</p>
                <p className=' hover:cursor-pointer'>Youtube</p>
                <p className=' hover:cursor-pointer'>Linkedin</p>
              </div>


            </div>

          </div>
          <p className='text-center pt-8'>Copyright © 2023 Delicious Food. All rights reserved.</p>



        </div>
     );
 }
  
 export default Footer;