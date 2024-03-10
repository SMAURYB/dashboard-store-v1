import { BrowserRouter, Route } from 'react-router-dom';
import RoutesNotFound from './RoutesNotFound';

import Terminos from '../pages/Terminos';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Pay from '../pages/pay/Pay';
import Dashboard from '../pages/Dashboard';

function App () {
  return (
    <BrowserRouter>
      <RoutesNotFound>
        <Route path='/' element={<Dashboard />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/pay' element={<Pay />} />
        <Route path='/terminos' element={<Terminos />} />
      </RoutesNotFound>
    </BrowserRouter>
  );
}

export default App;
