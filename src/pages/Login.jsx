import { useState } from 'react'
import Register from '../components/login/Register'

export default function Login() {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await signUp(user.email, user.password);
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col gap-y-6 py-10 px-20 items-center'>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login</h2>
        <div className="flex flex-col gap-y-2 w-[340px]">
          <label htmlFor="email" className="text-gray-400 text-sm">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email"
              placeholder="youremail@company.ltd"
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            />
        </div>
        <div className="flex flex-col gap-y-2 w-[340px]">
          <label htmlFor="email" className="text-gray-400 text-sm">Password</label>
            <input 
              type="password" 
              name="password" 
              id="password"
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            />
        </div>
        <button 
                type='submit'
                className='w-[340px] bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'
            >
                Ingresar
            </button>
      </form>
      <Register/>
    </>
  )
}
