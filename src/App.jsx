// https://www.youtube.com/watch?v=H_vEJt5Id_I&t=3451s

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Cambia useNavigate a Navigate
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Store from "./components/Store";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";
import Payment from "./components/Payment";
import AuthProvider, { useAuth } from "./context/AuthContext";
import useThemes from './hooks/useThemes';

function App() {
  const { user, loading } = useAuth();
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const { bg1 } = useThemes();
  // Espera a que se cargue la información de autenticación antes de renderizar las rutas
  if (loading) {
    return <div>Cargando...</div>;
  }

  // Si el usuario no está autenticado, redirige a la página de inicio de sesión
  if (!user && !loading && !redirectToLogin) {
    setRedirectToLogin(true);
  }

  return (
    <div className={`${bg1} h-screen flex items-center justify-center text-[white]`}>
      <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {user ? (
              <>
                <Route path="/" element={<Store />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/payment" element={<Payment />} />
              </>
            ) : null}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// - xxxxxxxxxxxxxxxxxxxxxxxxx localstore para usuario
// - xxxxxxxxxxxxxxxxxxxxxxxxx habilitar ruta módulo pago  
// - xxxxxxxxxxxxxxxxxxxxxxxxx habilitar boton cerrar seccion que envie a pagina de salida
// - xxxxxxxxxxxxxxxxxxxxxxxxxcolocar nombre de usuario en parte superior derecha

// - después de registrarse navegue al módulo de crear perfil y quede la opción de saltarse ese paso y que lo haga cuando le de al boton pagar 
// - crear opciones de cambio de tema y colores en la tuerca de settings 
// - setear firebase para registro de usuarios con perfil (direccion, telefono, etc)
// - módulo de administradores : cargue de productos , productos, etc
// - poner a funcionar autenticación con google
// - si me devuelvo de payment, que no se borre el carrito de compras


