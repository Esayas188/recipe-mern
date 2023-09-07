import { useState } from "react"
import { useSignup } from "../hook/useSignup"
import { useNavigate,Link } from 'react-router-dom';
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <>
    <Navbar/>
    <div className="mt-12 pt-16 md:mt-0 md:pt-40 min-h-screen min-w-screen bg-gray-50   flex  items-center">
      
      <div className=' flex  items-cente w-full mx-6 sm:mx-32  lg:mx-40 bg-white shadow-md border-gray-200 border overflow-hidden rounded-xl '>
        <div style={{ backgroundImage: "url('./img/second.svg')"}} className=" h-[480px] sm:flex-1 bg-center bg-cover bg-no-repeat"  >

        </div>
        <div className="h-[480px]  rounded-r-xl flex-1 items-center ">
        <div className='h-full w-full space-y-4 flex flex-col justify-center items-center'>
        <h3 className="uppercase">Sign Up</h3>
        <form className="login space-y-2 flex w-2/3  h-1/2 flex-col" onSubmit={handleSubmit}>
          
          <label>Email address:</label>
          <input className=' bg-slate-50 p-1 text-sm  border rounded'
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
          />
          <label>Password:</label>
          <input className='rounded p-1 text-sm  bg-slate-50 border'
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
          />

          <button disabled={isLoading} className="bg-[#011936] hover:bg-[#12243a] cursor-pointer rounded-lg shadow-sm py-1 text-[#DCF3F0] mt-1">{isLoading ? "Leading" : "Sign Up"}</button>
          {error && <div className="error p-2 border rounded-md border-red-500 text-center">{error}</div>}
          <p className="pt-1">Have An Account <Link className=" text-blue-500" to={'/login'}>Login Here</Link> </p>
      </form>

        </div>


        </div>

      </div>


    </div>
    <Footer/>
  
    </>

  )
}

export default Signup