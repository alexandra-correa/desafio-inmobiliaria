const propiedades_venta = [

    {
        nombre: "Casa moderna en Santiago",
        src: "assets/img/casa1.jpg",
        descripcion: "Hermosa casa con amplios espacios y excelente ubicación.",
        ubicacion: "Santiago Centro",
        habitaciones: 4,
        costo: 250000000,
        smoke: false,
        pets: true
    },

    {
        nombre: "Departamento con vista al mar",
        src: "assets/img/depto1.jpg",
        descripcion: "Departamento luminoso cercano a la playa.",
        ubicacion: "Viña del Mar",
        habitaciones: 3,
        costo: 180000000,
        smoke: true,
        pets: false
    },

    {
        nombre: "Casa familiar con jardín",
        src: "assets/img/casa2.jpg",
        descripcion: "Propiedad ideal para familias con jardín privado.",
        ubicacion: "Maipú",
        habitaciones: 5,
        costo: 320000000,
        smoke: false,
        pets: true
    },

    {
        nombre: "Departamento céntrico",
        src: "assets/img/depto2.jpg",
        descripcion: "Departamento cercano a comercios y transporte.",
        ubicacion: "Providencia",
        habitaciones: 2,
        costo: 150000000,
        smoke: false,
        pets: false
    }

];



function mostrarVenta(cantidad = propiedades_venta.length){

    let contenido = "";


    for(let i = 0; i < cantidad; i++){

        let propiedad = propiedades_venta[i];


        let fumar = propiedad.smoke
            ? "🚬 Se permite fumar"
            : "🚭 No se permite fumar";


        let mascotas = propiedad.pets
            ? "🐶 Mascotas permitidas"
            : "🚫 No se permiten mascotas";



        contenido += `

        <div class="card">

            <img src="${propiedad.src}" alt="${propiedad.nombre}">


            <h3>${propiedad.nombre}</h3>


            <p>${propiedad.descripcion}</p>


            <p>
            📍 ${propiedad.ubicacion}
            </p>


            <p>
            🛏 Habitaciones: ${propiedad.habitaciones}
            </p>


            <p class="precio">
            💰 $${propiedad.costo.toLocaleString("es-CL")}
            </p>


            <p class="${propiedad.smoke ? "permitido" : "prohibido"}">
            ${fumar}
            </p>


            <p class="${propiedad.pets ? "permitido" : "prohibido"}">
            ${mascotas}
            </p>


        </div>

        `;

    }


    document.querySelector("#venta-container").innerHTML = contenido;

}




if(document.querySelector("#venta-container")){


    if(window.location.pathname.includes("index")){

        mostrarVenta(3);

    }else{

        mostrarVenta();

    }

}