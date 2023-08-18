import '../index.css';
import { useState } from "react"
import { useLogin } from "../hook/useLogin"
import { useNavigate,Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
  }

  return (


    <>
    <div className="min-h-screen min-w-screen bg-gray-50   flex  items-center">
      
      <div className=' flex  items-cente w-full mx-6 sm:mx-20  lg:mx-40 bg-white shadow-md border-gray-200 border overflow-hidden rounded-xl '>
        <div style={{ backgroundImage: "url('./img/second.svg')"}} className=" h-[480px] sm:flex-1 bg-center bg-cover bg-no-repeat"  >

        </div>
        <div className="h-[480px]  rounded-r-xl flex-1 items-center ">
        <div className='h-full w-full space-y-4 flex flex-col justify-center items-center'>
        <h3 className=' uppercase'>Log In</h3>
        <form className="login space-y-2 flex w-2/3  h-1/2 flex-col" onSubmit={handleSubmit}>
          
          <label>Email address:</label>
          <input className=' bg-slate-50 border p-1 text-sm rounded'
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
          />
          <label>Password:</label>
          <input className='rounded bg-slate-50 p-1 text-sm border'
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
          />

          <button disabled={isLoading} className="bg-green-300 rounded-lg shadow-sm py-1 mt-1 ">Log in</button>
          {error && <div className="error p-2 border rounded-md border-red-500 text-center">{error}</div>}
          <p className='pt-1'>Don't Have An Account <Link className='text-blue-500' to={'/signup'}>Create Here</Link> </p>

      </form>

        </div>


        </div>

      </div>


    </div>
    </>









  )
}

export default Login