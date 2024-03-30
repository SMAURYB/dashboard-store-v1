import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";
import useThemes from '../hooks/useThemes';

// src\pages\Login.jsx
// src/components/login/Alert.jsx

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { bg1, bg2, bg3, bg4, setBg1, setBg2, setBg3, setBg4 } = useThemes();
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [reset, setReset] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/dashboard", { state: { message: 'Bienvenido a su tienda Online' } });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    console.log('entré a handleGoogleSignin')
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setReset(true)
    if (!user.email) return setError("Escribe un email para resetear el password");
    try {
      await resetPassword(user.email);
      setError('Enviamos un email, revise su bandeja de entrada')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={`${bg2} flex flex-row items-center justify-center w-full h-full`}>
      <div className="w-full max-w-xs m-auto">
        {error && <Alert message={error} />}
        <form
          onSubmit={handleSubmit}
          className="bg-stone-300 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="tucorreo@correo.com"
            />
          </div>
          { reset? <></> :
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="******"
              />
            </div>
          }
          <div className="flex items-center justify-between">
            { reset? <></> :
              <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Ingrese
            </button>
            }
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#!"
              onClick={handleResetPassword}
            >
              {reset?"Enviar correo":"Olvidó su contraseña?"}
            </a>
          </div>
        </form>
        <button
          onClick={handleGoogleSignin}
          className="flex flex-row items-center justify-center gap-x-6 bg-slate-50 hover:bg-slate-200 text-black  shadow rounded border-2 border-gray-300 py-2 px-4 w-full"
        >
          Ingrese con Google
          <img src="googleIcon.svg" className='w-8' />
        </button>
        <p className="my-4 text-sm flex justify-between px-3 text-slate-300">
          No tienes una cuenta?
          <Link to="/register" className="text-blue-700 hover:text-blue-500">
            Regístrese
          </Link>
        </p>
      </div>
    </div>
  );
}