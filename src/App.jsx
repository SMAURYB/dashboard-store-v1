// App.jsx
// https://www.youtube.com/watch?v=H_vEJt5Id_I&t=3451s

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Store from "./components/Store";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";
import Payment from "./components/Payment";

import AuthProvider, { useAuth } from "./context/AuthContext";

function App() {
  const { user, loading } = useAuth();

  // Espera a que se cargue la información de autenticación antes de renderizar las rutas
  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="bg-slate-800 h-screen flex items-center justify-center text-[white]">
      <BrowserRouter>
        <AuthProvider> {/* Mueve AuthProvider aquí para que envuelva a todo */}
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
            ) : (
              <Navigate to="/login" />
            )}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;



// - localstore para usuarioxxxxxxxxxxxxxxxxxx
// - habilitar ruta módulo pago  
// - después de registrarse navegue al módulo de crear perfil 
// - habilitar boton cerrar seccion que envie a pagina de salida
// - crear opciones de cambio de tema y colores en la tuerca de settings 
// - colocar nombre de usuario en parte superior derecha
// - setear firebase para registro de usuarios con perfil (direccion, telefono, etc)
// - módulo de administradores : cargue de formatPostcssSourceMap, productos, etc


