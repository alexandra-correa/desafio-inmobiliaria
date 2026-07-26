const propiedades_alquiler = [

    {
        nombre: "Departamento acogedor",
        src: "assets/img/alquiler1.jpg",
        descripcion: "Departamento cómodo para vivir en familia.",
        ubicacion: "Ñuñoa",
        habitaciones: 3,
        costo: 700000,
        smoke: false,
        pets: true
    },


    {
        nombre: "Casa en barrio tranquilo",
        src: "assets/img/alquiler2.jpg",
        descripcion: "Casa con patio y excelente conectividad.",
        ubicacion: "La Florida",
        habitaciones: 4,
        costo: 950000,
        smoke: true,
        pets: true
    },


    {
        nombre: "Departamento pequeño",
        src: "assets/img/alquiler3.jpg",
        descripcion: "Ideal para una persona o pareja.",
        ubicacion: "Santiago Centro",
        habitaciones: 1,
        costo: 450000,
        smoke: false,
        pets: false
    },


    {
        nombre: "Departamento premium",
        src: "assets/img/alquiler4.jpg",
        descripcion: "Departamento moderno con estacionamiento.",
        ubicacion: "Las Condes",
        habitaciones: 3,
        costo: 1200000,
        smoke: false,
        pets: true
    }

];



function mostrarAlquiler(cantidad = propiedades_alquiler.length){

    let contenido = "";


    for(let i = 0; i < cantidad; i++){


        let propiedad = propiedades_alquiler[i];


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


            <p>
            ${propiedad.descripcion}
            </p>


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


    document.querySelector("#alquiler-container").innerHTML = contenido;

}




if(document.querySelector("#alquiler-container")){


    if(window.location.pathname.includes("index")){

        mostrarAlquiler(3);

    }else{

        mostrarAlquiler();

    }

}