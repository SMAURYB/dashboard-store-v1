import React from 'react';
import { useForm } from 'react-hook-form'; // Importa useForm desde react-hook-form
import useThemes from '../../hooks/useThemes';
import { db } from "../../firebase.config"; 
import { doc, setDoc } from "firebase/firestore";

export default function AdminForm({ setShowForm }) {
    const { bg1, bg2, bg3, bg4 } = useThemes();
    const { register, handleSubmit } = useForm();

    // Función que se ejecuta cuando se envía el formulario
    const onSubmit = async (data) => {
        console.log("entro a onsubmit")
        try {
            const docRef = doc(db, "productos", v4()); 
            await setDoc(docRef, {
                referencia: data?.reference, 
                marca: data?.branch, 
                nombre: data?.name, 
                tamaño: data?.size,  
                imagen: data?.image, 
                precio: data?.price, 
                disponibilidad: data?.availability, 
                categoria: data?.category,
            });
                navigate(-1);
                // aca debe abrir un popup de envio exitoso
            
        } catch (error) {
            // Manejar cualquier error que ocurra durante el envío de datos a Firestore
            console.error("Error al enviar los datos del usuario a Firestore:", error);
        }
    };
    
    return (
        <div className={`w-full h-full ${bg2} flex items-center justify-center`}>
            <div className={`flex flex-col items-center justify-center gap-x-5 rounded-2xl p-8 shadow-sm`}>
                <div className='flex flex-row gap-x-5'>
                    <div className={`rounded-lg bg-violet-200 p-8 shadow-md gap-x-6`}>
                        <form 
                            onSubmit={handleSubmit(onSubmit)} 
                            className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                
                            <div className="flex flex-col">
                                <label htmlFor="id" className="text-sm text-gray-600">Id</label>
                                <input
                                    name="id"
                                    type="text"
                                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                                    {...register("id")} // Vincular el campo de entrada a "id"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="referencia" className="text-sm text-gray-600">Referencia</label>
                                <input
                                    name="referencia"
                                    type="text"
                                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                                    {...register("referencia")} // Vincular el campo de entrada a "referencia"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="marca" className="text-sm text-gray-600">Marca</label>
                                <input
                                    name="marca"
                                    type="text"
                                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                                    {...register("marca")} // Vincular el campo de entrada a "marca"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="nombre" className="text-sm text-gray-600">Nombre</label>
                                <input 
                                    name="nombre" 
                                    type="text" 
                                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                                    {...register("nombre")}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="tamaño" className="text-sm text-gray-600">Tamaño</label>
                                <input 
                                    name="tamaño" 
                                    type="text" 
                                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" 
                                    {...register("tamaño")} 
                                    />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="imagen" className="text-sm text-gray-600">Imagen</label>
                                <input 
                                    name="imagen" 
                                    type="text" 
                                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" 
                                    {...register("imagen")} 
                                    />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="precio" className="text-sm text-gray-600">Precio</label>
                                <input 
                                    name="precio" 
                                    type="text" 
                                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" 
                                    {...register("precio")} 
                                    />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="disponibilidad" className="text-sm text-gray-600">Disponibilidad</label>
                                <input 
                                    name="disponibilidad" 
                                    type="text" 
                                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" 
                                    {...register("disponibilidad")}
                                    />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="categoria" className="text-sm text-gray-600">Categoría</label>
                                <input 
                                    name="categoria" 
                                    type="text" 
                                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" 
                                    {...register("categoria")} 
                                    />
                            </div>
                        </form>
                    </div>
                    <div className='flex items-center justify-center rounded-lg bg-violet-200 p-8 shadow-md w-[500px] h-[500px]'>
                        <div className='bg-white w-[95%] h-[95%] rounded-sm'></div>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between w-full gap-x-4'>
                    <div className='flex flex-row gap-x-4'>
                        <button 
                            className={`${bg4} hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4`}
                            type="submit"
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
    );
}
