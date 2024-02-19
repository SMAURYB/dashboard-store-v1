import Ecommerce from './Ecommerce'
import FormFirebase from './FormFirebase'
import { AuthProvider } from './context/AuthContext';
// https://www.youtube.com/watch?v=4mGB9W0NOqU
function App() {
  return ( 
    <AuthProvider>
      <FormFirebase />
      <Ecommerce />

    </AuthProvider>
  );
}

export default App;

// 0- Hacerle un hover a los productos - OK
// 1- Al incrementar las cantidades no deben superar la cantidad en inventario OK
// 2- Arreglar los focus de los checkbox - OK
// 3- Arregla los checkbox que se borren cuando se elimina un item OK

// 4- Crear módulo Login y autenticacion
// 5- Crear módulo de carga de productos 
// 6- Crear módulo de pagos
// 7- Definir tipos de usuarios
      // Vendedor
      //   - Sube y baja productos , actualiza inventarios
      //   - Debe tener un módulo que muestre histórico
      // Comprador
      //   - Compra
      //   - mostrar favoritos
// 8- Opción de cambiar colores de bg y menús
// 9- Unificar las variables searc y filter


