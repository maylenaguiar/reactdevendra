export const products = [
    {
        id: 1,
        name: 'Sahumerios',
        stock: 10,
        price: 200,
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_776278-MLA48173899857_112021-F.webp'
    },
    {
        id: 2,
        name: 'Bomba Sahumadora',
        stock: 2,
        price: 400,
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_650634-MLA45433830324_042021-F.webp'
    },
    {
        id: 3,
        name: 'Velas aromáticas',
        stock: 7,
        price: 300,
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_798905-MLA47892959853_102021-F.webp'
    },
];

export const traerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});