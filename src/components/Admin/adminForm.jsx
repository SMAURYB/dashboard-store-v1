import React from 'react'
import useThemes from '../../hooks/useThemes';

export default function adminForm({setShowForm}) {
    const { bg1, bg2, bg3, bg4 } = useThemes();
  return (
    <div className={`w-full h-full ${bg1} flex items-center justify-center`}>
        <div className={`flex flex-col gap-x-5 rounded-2xl ${bg2} p-8 shadow-sm mt-[100px]`}>
            <div className='flex flex-row gap-x-5'>
                <div className={`rounded-lg bg-violet-200 p-8 shadow-md gap-x-6`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                        <label htmlFor="id" className="text-sm text-gray-600">Id</label>
                        <input id="id" type="text" className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="flex flex-col">
                        <label htmlFor="referencia" className="text-sm text-gray-600">Referencia</label>
                        <input id="referencia" type="text" className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="flex flex-col">
                        <label htmlFor="marca" className="text-sm text-gray-600">Marca</label>
                        <input id="marca" type="text" className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="flex flex-col">
                        <label htmlFor="nombre" className="text-sm text-gray-600">Nombre</label>
                        <input id="nombre" type="text" className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="flex flex-col">
                        <label htmlFor="tamaño" className="text-sm text-gray-600">Tamaño</label>
                        <input id="tamaño" type="text" className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="flex flex-col">
                        <label htmlFor="imagen" className="text-sm text-gray-600">Imagen</label>
                        <input id="imagen" type="text" className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="flex flex-col">
                        <label htmlFor="precio" className="text-sm text-gray-600">Precio</label>
                        <input id="precio" type="text" className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="flex flex-col">
                        <label htmlFor="disponibilidad" className="text-sm text-gray-600">Disponibilidad</label>
                        <input id="disponibilidad" type="text" className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="flex flex-col">
                        <label htmlFor="categoria" className="text-sm text-gray-600">Categoría</label>
                        <input id="categoria" type="text" className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="flex flex-col">
                        <label htmlFor="accion" className="text-sm text-gray-600">Acción</label>
                        <input id="accion" type="text" className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" />
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center rounded-lg bg-violet-200 p-8 shadow-md w-[500px] h-[500px]'>
                    <div className='bg-white w-[90%] h-[90%]'>

                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-between gap-x-4'>
                <div className='flex flex-row gap-x-4'>
                    <button 
                        className={`${bg4} hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4`}
                    >
                        Crear/Editar
                    </button>
                    <button
                        onClick={() => setShowForm(false)}
                        className={`${bg4} hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4`}
                    >
                        Cerrar
                    </button>
                </div>
                <button 
                    className={`${bg4} hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4`}
                >
                    Imagen
                </button>
            </div>
        </div>
    </div>
  )
}
