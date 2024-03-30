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
import Admin from "./components/Admin";
import AuthProvider, { useAuth } from "./context/AuthContext";
import useThemes from './hooks/useThemes';
import './App.css';

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
    <div className={`h-screen flex items-start justify-center`}>
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
                <Route path="/admin" element={<Admin />} />
              </>
            ) : null}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// - 1) xxxxxxxxxxxxxxxxxtomar el userCredentials y volverlo variable global, que aparezca el nombre del usuario arriba en el store
// - 2) mejorar los mensajes de error del login y register, en español y colocarle adapters
// - 3) módulo de administradores : cargue de productos , productos, etc
//      - Formulario de cargue de productos uno a uno, con: 
              // -precio, 
              // -marca, 
              // -url foto, 
              // -cantidad en inventario
              // -referencia,
              // -tipo (aseo, bebidas, ect)
//      - tabla crud
//      - Base de datos de inventario, entradas y salidas de items
// - 4) crear acceso a páginas por tipo de usuarios y tipos de usuarios en firebase

// - crear módulo de pagos... hay que buscar opcion que cobre menos..recomedadas payu y mercadopago en versión test
// - arreglar el hover del sidebar o hacer uno mas bacano
// - botón del profile de usuario debe regresar, no lo hace 
// - bug si me devuelvo de payment, que no se borre el carrito de compras
// - bug corregir en carrito, si se selecciona un item, y se cambia de tab, se borra el check
// - usar Zubstan para variables globales como carrito de compras
// - colocar el número de items seleccionados

// - xxxxxxxxxxxxxxxxxxxxxxxxx localstore para usuario
// - xxxxxxxxxxxxxxxxxxxxxxxxx habilitar ruta módulo pago  
// - xxxxxxxxxxxxxxxxxxxxxxxxx habilitar boton cerrar seccion que envie a pagina de salida
// - xxxxxxxxxxxxxxxxxxxxxxxxx colocar nombre de usuario en parte superior derecha
// - xxxxxxxxxxxxxxxxxxxxxxxxx crear opciones de cambio de tema y colores en la tuerca de settings 
// - xxxxxxxxxxxxxxxxxxxxxxxxx después de registrarse navegue al módulo de crear perfil y quede la opción de saltarse ese 
// - xxxxxxxxxxxxxxxxxxxxxxxxx paso y que lo haga cuando le de al boton pagar 
// - xxxxxxxxxxxxxxxxxxxxxxxxx mejorar el scroll del car con custom-scroll
// - xxxxxxxxxxxxxxxxxxxxxxxxx poner a funcionar autenticación con google
// - xxxxxxxxxxxxxxxxxxxxxxxxx setear firebase para registro de usuarios con perfil (direccion, telefono, etc)
