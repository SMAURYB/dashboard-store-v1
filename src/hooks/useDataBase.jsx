function useDataBase() {

    const dataBase = [
        { id: 0, ref: 11122, branch: 'alpina', name: 'Queso Crema', size: '500 gramos', checked: false, imagen: 'queso-crema-colanta.png', price: 3200, availability: 20, category: '2' },
        { id: 1, ref: 11122, branch: 'alpina', name: 'Huevos', size: '30 unidades', checked: false, imagen: 'huevos.jpg', price: 200, availability: 50, category: '2' },
        { id: 2, ref: 11122, branch: 'alpina', name: 'Azucar', size: '1 libra', checked: false, imagen: 'azucar.jpg', price: 3800, availability: 20, category: '2' },
        { id: 3, ref: 11122, branch: 'alpina', name: 'Cerveza Aguila', size: '6 unidades', checked: false, imagen: 'aguila-ligth.png', price: 3000, availability: 20, category: '1' },
        { id: 4, ref: 11122, branch: 'alpina', name: 'Cafe Sello Rojo', size: '1 libra', checked: false, imagen: 'cafe-sello-rojo.jpg', price: 9300, availability: 20, category: '2' },
        { id: 5, ref: 11122, branch: 'alpina', name: 'Coca Cola', size: '1 litro', checked: false, imagen: 'cocacola-x250.jpg', price: 4500, availability: 40, category: '1' },
        { id: 6, ref: 11122, branch: 'alpina', name: 'Frutiño', size: 'Sobre 300 gr', checked: false, imagen: 'frutiño-limon.jpg', price: 1780, availability: 30, category: '2' },
        { id: 7, ref: 11122, branch: 'alpina', name: 'Gelatina Limón', size: '300 gr', checked: false, imagen: 'gelatina-limon.jpg', price: 2350, availability: 20, category: '2' },
        { id: 8, ref: 11122, branch: 'alpina', name: 'Sal Marina', size: '1 libra', checked: false, imagen: 'sal-marina.jpg', price: 1500, availability: 14, category: '2' },
        { id: 9, ref: 11122, branch: 'alpina', name: 'Queso Costeño', size: '1 libra', checked: false, imagen: 'queso-costeño.jpg', price: 13500, availability: 18, category: '2' },
        { id: 10, ref: 11122, branch: 'alpina', name: 'Jamón Pietran', size: '1/2 libra', checked: false, imagen: 'jamon-pietran.jpg', price: 14500, availability: 26, category: '2' },
        { id: 11, ref: 11122, branch: 'alpina', name: 'Jabón Rey', size: '300 gramos', checked: false, imagen: 'jabon-rey-un-x300-gr.jpg', price: 4000, availability: 24, category: '4' },
        { id: 12, ref: 11122, branch: 'alpina', name: 'Fabuloso', size: '200 ml', checked: false, imagen: 'fabuloso.jpg', price: 3600, availability: 12, category: '4' },
        { id: 13, ref: 11122, branch: 'alpina', name: 'Coca Cola Six-Pack', size: '2 litros', checked: false, imagen: 'coca-cola-2L.jpg', price: 3600, availability: 12, category: '1' },
        { id: 14, ref: 11122, branch: 'alpina', name: 'Toalla Nosotras', size: '2 litros', checked: false, imagen: 'toalla-nosotras.jpg', price: 3600, availability: 12, category: '3' },
        { id: 15, ref: 11122, branch: 'alpina', name: 'Jabón Dorado', size: 'unidad', checked: false, imagen: 'jabon-bano-dorado-avena-y-miel-x125gr.jpg', price: 3600, availability: 12, category: '3' },
        { id: 16, ref: 11122, branch: 'alpina', name: 'Limpido', size: '1 litros', checked: false, imagen: 'limpido.jpg', price: 3600, availability: 12, category: '4' },
        { id: 17, ref: 11122, branch: 'alpina', name: 'Detergente Versa', size: '2000 gramos', checked: false, imagen: 'versa.jpg', price: 13600, availability: 12, category: '4' },
        { id: 18, ref: 11122, branch: 'alpina', name: 'Light Yá', size: '2000 gramos', checked: false, imagen: 'fresco-inst-lightya-10grs-limon.jpg', price: 13600, availability: 12, category: '2' },
        { id: 19, ref: 11122, branch: 'alpina', name: 'Papel Higienico', size: '1 litros', checked: false, imagen: 'p-higienico.jpg', price: 3600, availability: 12, category: '3' },
        { id: 20, ref: 11122, branch: 'alpina', name: 'Servilleta Cocina', size: 'rollo', checked: false, imagen: 'servilleta-cocina.jpg', price: 13600, availability: 12, category: '4' },
        { id: 21, ref: 11122, branch: 'alpina', name: 'Suavitel', size: '1 litro', checked: false, imagen: 'suavitel.jpg', price: 13600, availability: 12, category: '4' },
        { id: 22, ref: 11122, branch: 'alpina', name: 'Agua botella', size: '350 ml', checked: false, imagen: 'agua-cristal-x-420cc-pet.jpg', price: 13600, availability: 12, category: '1' },
        { id: 23, ref: 11122, branch: 'alpina', name: 'Aguila lata', size: '24 unid', checked: false, imagen: 'aguila-orginal-24.jpg', price: 13600, availability: 12, category: '1' },
        { id: 24, ref: 11122, branch: 'alpina', name: 'Aguila botella', size: 'unid', checked: false, imagen: 'aguila-350.png', price: 2600, availability: 12, category: '1' },
        { id: 25, ref: 11122, branch: 'alpina', name: 'Huevo rojo', size: 'unidad', checked: false, imagen: 'huevo-rojo-x-unidad.jpg', price: 600, availability: 80, category: '2' },
        { id: 26, ref: 11122, branch: 'alpina', name: 'Papel Higiénico', size: 'unidad', checked: false, imagen: 'papel-higienico-nube.jpg', price: 600, availability: 80, category: '3' },
        { id: 27, ref: 11122, branch: 'alpina', name: 'Pasta Dental', size: 'unidad', checked: false, imagen: 'colgate-3-act.jpg', price: 13600, availability: 80, category: '3' },
        { id: 28, ref: 11122, branch: 'alpina', name: 'Desodorante Gel', size: 'unidad', checked: false, imagen: 'des-speed-stick.jpg', price: 13600, availability: 80, category: '3' },
        { id: 29, ref: 11122, branch: 'alpina', name: 'Cuchilla Afeitar', size: 'unidad', checked: false, imagen: 'gillete.jpeg', price: 1600, availability: 80, category: '3' },
      ]
    return {
        dataBase
      }
    }
    export default useDataBase
