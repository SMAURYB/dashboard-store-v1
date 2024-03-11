import { BrowserRouter, Route } from 'react-router-dom';
import RoutesNotFound from './RoutesNotFound';

import Terminos from '../pages/Terminos';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Pay from '../pages/pay/Pay';
import Dashboard from '../pages/Dashboard';
import AuthProvider from '../assets/context/authContext';
// C:\Users\sergi\Documents\ProyectosWebSMB\ecommerce\dashboard-store-v1\src\assets\context\authContext.jsx
// C:\Users\sergi\Documents\ProyectosWebSMB\ecommerce\dashboard-store-v1\src\routes\App.jsx
function App () {
  return (
    <AuthProvider>
      <BrowserRouter>
        <RoutesNotFound>
          <Route path='/' element={<Dashboard />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/pay' element={<Pay />} />
          <Route path='/terminos' element={<Terminos />} />
        </RoutesNotFound> 
      </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;
