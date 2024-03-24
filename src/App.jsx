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
    <div className={`${bg1} h-screen flex items-start justify-center text-[white]`}>
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
// - xxxxxxxxxxxxxxxxxxxxxxxxx colocar nombre de usuario en parte superior derecha
// - xxxxxxxxxxxxxxxxxxxxxxxxx crear opciones de cambio de tema y colores en la tuerca de settings 
// - xxxxxxxxxxxxxxxxxxxxxxxxx después de registrarse navegue al módulo de crear perfil y quede la opción de saltarse ese 
// - xxxxxxxxxxxxxxxxxxxxxxxxx paso y que lo haga cuando le de al boton pagar 
// - xxxxxxxxxxxxxxxxxxxxxxxxx mejorar el scroll del car con custom-scroll
// - xxxxxxxxxxxxxxxxxxxxxxxxx poner a funcionar autenticación con google

// - setear firebase para registro de usuarios con perfil (direccion, telefono, etc)
// - ya hace el envio de los datos de los usuarios a firebase.cloud... hay que buscar que se relaciones por id de usuario
// - módulo de administradores : cargue de productos , productos, etc
// - crear módulo de pagos... hay que buscar opcion que cobre menos..recomedadas payu y mercadopago en versión test
// - arreglar el hover del sidebar o hacer uno mas bacano
// - bug si me devuelvo de payment, que no se borre el carrito de compras
// - bug corregir en carrito, si se selecciona un item, y se cambia de tab, se borra el check
// - usar Zubstan para variables globales como carrito de compras


