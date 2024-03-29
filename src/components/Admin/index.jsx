import { useState } from 'react';
import useThemes from '../../hooks/useThemes';
import { useAuth } from "../../context/AuthContext";
//import { useHistory } from 'react-router-dom'; // Assuming you're using React Router
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import AdminForm from './AdminForm'; // Capitalized component name
import useDataBase from '../../hooks/useDataBase';
import '../../App.css';

export default function Admin() {
  const [showForm, setShowForm] = useState(false);
  const { user } = useAuth();
  const { dataBase } = useDataBase();
  const { bg1, bg2, bg3, bg4, setBg1, setBg2, setBg3, setBg4 } = useThemes();
 // const history = useHistory(); // For navigation

  // Function to handle item deletion
  const handleDeleteButton = (itemId) => {
    // Implement deletion logic here
  };

  // Function to handle item editing
  const handleEditButton = (itemId) => {
    setShowForm(true)
  };

  return (
    <div className={`${bg2}`}>
      {showForm && 
        <AdminForm 
          className='z-40'
          setShowForm={setShowForm}
        />
      } {/* Capitalized component name */}
      {!showForm && 
      <div className={`flex flex-col items-center justify-start mt-[20px] ${bg1} w-[1500px] h-[840px] rounded-2xl shadow-md gap-y-2 py-4`}>
        <p className="text-[40px] font-bold text-red-600">
          MÓDULO DE ADMINISTRADORES
        </p>
        <div className="overflow-y-scroll w-[94%] rounded-lg">
          <table className="text-black w-full bg-zinc-400">
            <thead className="h-[46px] bg-zinc-500 sticky top-0 z-10">
              <tr>
                <th className="border border-slate-200 px-2">Id</th>
                <th className="border border-slate-200">Referencia</th>
                <th className="border border-slate-200">Marca</th>
                <th className="border border-slate-200">Nombre</th>
                <th className="border border-slate-200">Tamaño</th>
                <th className="border border-slate-200">Imagen</th>
                <th className="border border-slate-200">Precio</th>
                <th className="border border-slate-200">Disponibilidad</th>
                <th className="border border-slate-200">Categoría</th>
                <th className="border border-slate-200">Acción</th>
              </tr>
            </thead>
            <tbody>
              {dataBase.map(item => (
                <tr key={item.id} className="h-[46px] border border-slate-200">
                  <td className="border border-slate-200 text-center">{item.id}</td>
                  <td className="border border-slate-200 text-center">{item.ref}</td>
                  <td className="border border-slate-200 pl-4">{item.branch}</td>
                  <td className="border border-slate-200 pl-4">{item.name}</td>
                  <td className="border border-slate-200 pl-4">{item.size}</td>
                  <td className="border border-slate-200 pl-4">{item.imagen}</td>
                  <td className="border border-slate-200 text-center">{item.price}</td>
                  <td className="border border-slate-200 text-center">{item.availability}</td>
                  <td className="border border-slate-200 text-center">{item.category}</td>
                  <td className=" h-[46px] gap-x-3 flex flex-row items-center justify-center ">
                    <button className="flex flex-row items-center justify-center w-8 h-[38px] rounded-md bg-red-600 text-white" onClick={() => handleDeleteButton(item.id)}>
                      <RiDeleteBin6Line />
                    </button>
                    <button className="flex flex-row items-center justify-center w-8 h-[38px] rounded-md bg-slate-700 text-white" onClick={() => handleEditButton(item.id)}>
                      <RiEdit2Line />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          className="bg-purple-900 hover:bg-slate-300 rounded py-2 px-4 text-white font-bold"
          // onClick={() => history.goBack()} 
        >
          Regresar
        </button>
      </div>
      }
    </div>
  );
}
