import { useState } from 'react';
import useThemes from '../../hooks/useThemes';
import { useAuth } from "../../context/AuthContext";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import AdminForm from './AdminForm'; // Capitalized component name
import useDataBase from '../../hooks/useDataBase';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../App.css';

export default function Admin() {
  const [showForm, setShowForm] = useState(false);
  const [product, setProduct] = useState(false);
  const [action, setAction] = useState(null);
  const { user } = useAuth();
  const location = useLocation();
  const { dataBase } = useDataBase();
  const name2 = location.state?.name;
  const { bg1, bg2, bg3, bg4, setBg1, setBg2, setBg3, setBg4 } = useThemes();
  const navigate = useNavigate();
  // Function to handle item deletion
  const handleDeleteButton = (itemId) => {
    // Implement deletion logic here
  };

  // Function to handle item editing
  const handleEditCreateButton = (producto) => {
    console.log("producto", producto)
    if(producto) {
      setAction('Edit')
      setProduct(producto)
    } else {
      setAction('Create')
    }
    setShowForm(true)
  };

  console.log("name2", name2)

  return (
    <div className={`flex flex-col items-center justify-start ${bg2} w-full h-full gap-y-2 px-20`}>
      {showForm && 
        <AdminForm 
          className='z-40'
          setShowForm={setShowForm}
          action={action}
          product={product}
        />
      } 
      {!showForm && 
      <div className={`flex flex-col items-center justify-start w-full h-full pb-2 gap-y-3`}>
        <div className='flex flex-row justify-between items-center w-full'>
          <p className="text-[25px] font-semibold text-slate-300 tracking-wider mt-3">
            MÓDULO DE ADMINISTRADORES
          </p>
          <p className='text-[25px] text-slate-300'>{name2}</p>
        </div>
        <div className="overflow-y-scroll w-full h-[90%] rounded-lg ">
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
                    <button className="flex flex-row items-center justify-center w-8 h-8 rounded-md bg-red-600 text-white" onClick={() => handleDeleteButton(item.id)}>
                      <RiDeleteBin6Line />
                    </button>
                    <button className="flex flex-row items-center justify-center w-8 h-8 rounded-md bg-slate-700 text-white" onClick={() => handleEditCreateButton(item)}>
                      <RiEdit2Line />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='w-full flex flex-row items-center justify-between'>
          <button
            className="bg-purple-900 hover:bg-slate-300 hover:text-purple-900 rounded text-xl py-2 px-6 mb-3 text-slate-300 font-bold"
            onClick={() => navigate(-1)} 
          >
            Regresar
          </button>
          <button
            className="bg-purple-900 hover:bg-slate-300 hover:text-purple-900 rounded text-xl py-2 px-6 mb-3 text-slate-300 font-bold"
            onClick={() => handleEditCreateButton()}
          >
            Crear Producto
          </button>          
        </div>
      </div>
      }
    </div>
  );
}
