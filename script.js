let misCompras=[]

let productos =[
    {
        id: 1,
        nombre: "Mate",
        descripcion: "Mate de calabaza forrado en cuero con patas reforzadas con virola de acero inoxidable Grabado Incluye bombilla Picoloro. Para empezar a usarlo es necesario curarlo. En las imagenes de este producto describimos cómo realizarlo.",
        precio: "$7800",
        img: "./img/011-9674ae7505aa2f4dee16304359060052-640-0.jpg",
    },
    {
        id: 2,
        nombre: "Matera",
        descripcion: "Matera de lona rectangular con detalles en ecocuero. Interior impermeable con separadores. Cierre con velcro.Bolsillo trasero con cierre. Tira larga tipo morral con opción mochila. Incluye de regalo yerbera de tela.Medidas: 40x26x12",
        stock:10,
        precio: "$11500",
        img: "./img/matera.jpg"
    },
    {
        id: 3,
        nombre: "Termo",
        descripcion: "Termo media manija con pico cebador Capacidad de 1 litro",
        stock: 10,
        precio: "$6900", 
        img:"./img/termo.jpg"
    },
    {
        id: 4,
        nombre: "Tabla",
        descripcion: "Tabla alistonada de eucalipto con manija de agarre. Medidas: 50 cm por 30 cm por 3 cm de espesor. Grabada con escudo. Canaleta profunda.",
        stock:10,
        precio: "$9500",
        img:"./img/tabla.jpg"
    },
    {
        id: 5,
        nombre: "Cuchillo",
        descripcion: "Cuchillo con hoja de 16cm. Hoja en acero inoxidable con mango en madera Incluye la vaina de cuero.",
        stock:10,
        precio: "$6800",
        img:"./img/cuchillo.jpeg"
    },
    {
        id: 6,
        nombre: "Combo mate + yerbera + termo acero + matera",
        descripcion: "Incluye: Matera + Yerbera de tela + Termo Bostero + Mate Camionero Premium + Bombilla Picoloro. Matera hecha en Tela y EcoCuero Medidas: 40x26x12 Da la posibilidad de usarla como machila o como morral.Termo Capacidad de 1 litro. Mate de calabaza forrado en cuero con patas reforzadas con virola de acero inoxidable Grabado Incluye bombilla Picoloro. Para empezar a usarlo es necesario curarlo. En las imagenes de este producto describimos cómo realizarlo.",
        stock:10,
        precio: "$22000",
        img:"./img/combo-mate.jpeg"
    },
    {
        id: 7,
        nombre: "Asado bostero: tabla + cuchillo",
        descripcion: "Tabla alistonada de eucalipto con manija de agarre. Medidas: 50 cm por 30 cm por 3 cm de espesor. Grabada con escudo. Canaleta profunda.",
        stock:10,
        precio: "$14500",
        img:"./img/combo-tabla.jpg"
    },
];

let html = "";

productos.forEach(producto => {
    html += `
        <div class="card" style="width: 18rem;" margin: .5rem; >
            <img src="${producto.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <p class="card-text">${producto.precio}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `
})

document.getElementById('contenedor').innerHTML = html
