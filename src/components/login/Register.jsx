import { useState } from 'react'
import { useAuth } from '../../assets/context/authContext'
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const { signUp } = useAuth();
    const navigate = useNavigate();

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    };
        
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
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-6 py-10 px-20 items-center'>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Register</h2>

            <div className="flex flex-col gap-y-2 w-[340px]">
                <label htmlFor="email" className="text-gray-400 text-sm">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="youremail@company.ltd"
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                />
            </div>
            <div className="flex flex-col gap-y-2 w-[340px]">
                <label htmlFor="password" className="text-gray-400 text-sm">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                />
            </div>
            <button 
                type='submit'
                className='w-[340px] bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'
            >
                Register
            </button>
        </form>
    );
}
