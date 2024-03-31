import React, { useState, useEffect } from 'react';
import useThemes from '../../hooks/useThemes';
import { db, storage } from "../../firebase.config"; 
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Add getDownloadURL
import { doc, setDoc } from "firebase/firestore";
import { v4 } from "uuid";
import Popup from '../../components/shared/Popup';

export default function AdminForm({ setShowForm, action, product }) {
    const { bg2, bg3, bg4 } = useThemes();
    const [formData, setFormData] = useState({});
    const [showExitoso, setShowExitoso] = useState(false);

    async function onSubmit(event) {
        event.preventDefault();
    
        // Obtener la imagen del formulario
        const imageFile = formData.image;
    
        // Validar si se seleccionó una imagen
        if (!imageFile) {
            console.error("No se ha seleccionado ninguna imagen");
            return;
        }
    
        // Validar el tamaño de la imagen (opcional)
        if (imageFile.size > MAX_IMAGE_SIZE) {
            console.error("La imagen supera el tamaño máximo permitido");
            return;
        }
    
        try {
            // Mostrar mensaje de carga (opcional)
            // ...
    
            // Subir la imagen a Firebase Storage
            const imageRef = ref(storage, `images/${imageFile.name}`);
            const uploadTask = uploadBytes(imageRef, imageFile);
    
            // Mostrar progreso de la subida (opcional)
            // ...
    
            // Obtener la URL de descarga de la imagen
            const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
    
            // Crear un nuevo documento en Firestore
            const docRef = doc(db, "productos", v4());
            await setDoc(docRef, {
                ...formData, // Utilizar directamente los datos del formulario
                image: imageUrl, // Agregar la URL de la imagen
            });
    
            // Mostrar mensaje de éxito
            setShowExitoso(true);
            setShowForm(false);
        } catch (error) {
            console.error("Error al enviar los datos del producto a Firestore:", error);
        }
    }
    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        if (action === 'Edit') {
            setFormData(product);
        }
    }, [action, product]);

    return (
        <div className={`z-10 relative w-full h-full ${bg2} flex items-center justify-center `}>
           {showExitoso &&
                <div className='z-50 absolute shadow-xl'>
                    <Popup 
                        message='Envio exitoso' 
                        setShowExitoso={setShowExitoso}
                    />
                </div>
            }
            <div className={`flex flex-col items-center justify-center gap-x-5 rounded-2xl p-8 shadow-sm ${showExitoso ? 'blur-3xl' : ''}`}>
                <div className='flex flex-row gap-x-5'>
                    <div className={`rounded-lg ${bg3} p-8 shadow-md gap-x-3`}>
                        <form onSubmit={onSubmit} className={`grid grid-cols-1 md:grid-cols-2 gap-x-6`}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="ref" className="text-sm text-gray-300">Ref</label>
                                    <input
                                        name="ref"
                                        type="text"
                                        value={formData.ref || ''}
                                        className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="branch" className="text-sm text-gray-300">Marca</label>
                                    <input
                                        name="branch"
                                        type="text"
                                        value={formData.branch || ''}
                                        className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="text-sm text-gray-300">Nombre</label>
                                    <input
                                        name="name"
                                        type="text"
                                        value={formData.name || ''}
                                        className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="size" className="text-sm text-gray-300">Tamaño</label>
                                    <input
                                        name="size"
                                        type="text"
                                        value={formData.size || ''}
                                        className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="image" className="text-sm text-gray-300">Imagen</label>
                                    <input
                                    name="image"
                                    type="file"
                                    accept="image/*"
                                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                                    onChange={(event) => setFormData({ ...formData, image: event.target.files[0] })}
                                />

                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="price" className="text-sm text-gray-300">Precio</label>
                                    <input
                                        name="price"
                                        type="text"
                                        value={formData.price || ''}
                                        className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="availability" className="text-sm text-gray-300">Disponibilidad</label>
                                    <input
                                        name="availability"
                                        type="text"
                                        value={formData.availability || ''}
                                        className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="category" className="text-sm text-gray-300">Categoría</label>
                                    <input
                                        name="category"
                                        type="text"
                                        value={formData.category || ''}
                                        className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='p-4 bg-slate-200 rounded-sm'>
                            </div>
                        </form>
                    </div>
                    
                </div>
                <div className='flex flex-row items-center justify-between w-full gap-x-4'>
                    <div className='flex flex-row gap-x-4'>
                        <button 
                            className={`${bg4} hover:bg-blue-100 hover:text-red-500 text-white font-semibold py-2 px-4 rounded mt-4`}
                            type="submit"
                            onClick={onSubmit} 
                        >
                            {action === 'Create' ? 'Crear' : 'Editar'}
                        </button>
                        <button
                            onClick={() => setShowForm(false)}
                            className={`${bg4} hover:bg-blue-100 hover:text-red-500 text-white font-semibold py-2 px-4 rounded mt-4`}
                        >
                            Cerrar
                        </button>
                    </div>
                    <button 
                        className={`${bg4} hover:bg-blue-100  hover:text-red-500 text-white font-semibold py-2 px-4 rounded mt-4`}
                    >
                        Imagen
                    </button>
                </div>
            </div>
        </div>
    );
}
