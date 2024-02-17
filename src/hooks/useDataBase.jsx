function useDataBase() {
    const dataBase = [
        { id: 0, name: 'Queso Crema', size: '500 gramos', imagen: 'queso-crema-colanta.png', price: 3200, availability: 20, category: '2' },
        { id: 1, name: 'Huevos', size: '30 unidades', imagen: 'huevos.jpg', price: 200, availability: 50, category: '2' },
        { id: 2, name: 'Azucar', size: '1 libra', imagen: 'azucar.jpg', price: 3800, availability: 20, category: '2' },
        { id: 3, name: 'Cerveza Aguila', size: '6 unidades', imagen: 'aguila-ligth.png', price: 3000, availability: 20, category: '1' },
        { id: 4, name: 'Cafe Sello Rojo', size: '1 libra', imagen: 'cafe-sello-rojo.jpg', price: 9300, availability: 20, category: '2' },
        { id: 5, name: 'Coca Cola', size: '1 litro', imagen: 'cocacola-x250.jpg', price: 4500, availability: 40, category: '1' },
        { id: 6, name: 'Frutiño', size: 'Sobre 300 gr', imagen: 'frutiño-limon.jpg', price: 1780, availability: 30, category: '2' },
        { id: 7, name: 'Gelatina Limón', size: '300 gr', imagen: 'gelatina-limon.jpg', price: 2350, availability: 20, category: '2' },
        { id: 8, name: 'Sal Marina', size: '1 libra', imagen: 'sal-marina.jpg', price: 1500, availability: 14, category: '2' },
        { id: 9, name: 'Queso Costeño', size: '1 libra', imagen: 'queso-costeño.jpg', price: 13500, availability: 18, category: '2' },
        { id: 10, name: 'Jamón Pietran', size: '1/2 libra', imagen: 'jamon-pietran.jpg', price: 14500, availability: 26, category: '2' },
        { id: 11, name: 'Jabón Rey', size: '300 gramos', imagen: 'jabon-rey-un-x300-gr.jpg', price: 4000, availability: 24, category: '4' },
        { id: 12, name: 'Fabuloso', size: '200 ml', imagen: 'fabuloso.jpg', price: 3600, availability: 12, category: '4' },
        { id: 13, name: 'Coca Cola Six-Pack', size: '2 litros', imagen: 'coca-cola-2L.jpg', price: 3600, availability: 12, category: '1' },
        { id: 14, name: 'Toalla Nosotras', size: '2 litros', imagen: 'toalla-nosotras.jpg', price: 3600, availability: 12, category: '3' },
        { id: 15, name: 'Jabón Dorado', size: 'unidad', imagen: 'jabon-bano-dorado-avena-y-miel-x125gr.jpg', price: 3600, availability: 12, category: '3' },
        { id: 16, name: 'Limpido', size: '1 litros', imagen: 'limpido.jpg', price: 3600, availability: 12, category: '4' },
        { id: 17, name: 'Detergente Versa', size: '2000 gramos', imagen: 'versa.jpg', price: 13600, availability: 12, category: '4' },
        { id: 18, name: 'Light Yá', size: '2000 gramos', imagen: 'fresco-inst-lightya-10grs-limon.jpg', price: 13600, availability: 12, category: '2' },
        { id: 19, name: 'Papel Higienico', size: '1 litros', imagen: 'p-higienico.jpg', price: 3600, availability: 12, category: '3' },
        { id: 20, name: 'Servilleta Cocina', size: 'rollo', imagen: 'servilleta-cocina.jpg', price: 13600, availability: 12, category: '4' },
        { id: 21, name: 'Suavitel', size: '1 litro', imagen: 'suavitel.jpg', price: 13600, availability: 12, category: '4' },
        { id: 22, name: 'Agua botella', size: '350 ml', imagen: 'agua-cristal-x-420cc-pet.jpg', price: 13600, availability: 12, category: '1' },
        { id: 23, name: 'Aguila lata', size: '24 unid', imagen: 'aguila-orginal-24.jpg', price: 13600, availability: 12, category: '1' },
        { id: 24, name: 'Aguila botella', size: 'unid', imagen: 'aguila-350.png', price: 2600, availability: 12, category: '1' },
        { id: 25, name: 'Huevo rojo', size: 'unidad', imagen: 'huevo-rojo-x-unidad.jpg', price: 600, availability: 80, category: '2' },
        { id: 26, name: 'Papel Higiénico', size: 'unidad', imagen: 'papel-higienico-nube.jpg', price: 600, availability: 80, category: '3' },
        { id: 27, name: 'Pasta Dental', size: 'unidad', imagen: 'colgate-3-act.jpg', price: 13600, availability: 80, category: '3' },
        { id: 28, name: 'Desodorante Gel', size: 'unidad', imagen: 'des-speed-stick.jpg', price: 13600, availability: 80, category: '3' },
        { id: 29, name: 'Cuchilla Afeitar', size: 'unidad', imagen: 'gillete.jpeg', price: 1600, availability: 80, category: '3' },
      ]
    return {
        dataBase
      }
    }
    export default useDataBase
