# Desafío 4 - Inmobiliaria

Proyecto desarrollado para el **Desafío 4 - Inmobiliaria** del módulo de JavaScript de Desafío Latam.

La aplicación consiste en un sitio web inmobiliario que permite visualizar propiedades en venta y alquiler mediante renderización dinámica utilizando JavaScript, arreglos, objetos y manipulación del DOM.

## Deploy

La aplicación se encuentra desplegada utilizando GitHub Pages.

Puedes visualizar el proyecto funcionando en el siguiente enlace:

https://alexandra-correa.github.io/desafio-inmobiliaria/

El sitio permite explorar propiedades inmobiliarias con información generada dinámicamente desde JavaScript.

## Descripción del proyecto

El objetivo del proyecto es desarrollar una página inmobiliaria donde los datos de las propiedades son almacenados en arreglos de objetos y posteriormente renderizados en la interfaz.

La página principal muestra una selección de propiedades destacadas, mientras que las páginas de venta y alquiler permiten visualizar el listado completo disponible.

## Funcionalidades

- Renderización dinámica de propiedades.
- Visualización de propiedades en venta y alquiler.
- Uso de arreglos y objetos en JavaScript.
- Manipulación del DOM para generar contenido HTML.
- Uso de ciclos para recorrer información.
- Uso de template literals para construir elementos dinámicos.
- Condicionales para mostrar disponibilidad de mascotas y permiso para fumar.
- Diseño responsive adaptable a distintos dispositivos.

## Estructura del proyecto

desafio-inmobiliaria
│
├── index.html
├── propiedades_venta.html
├── propiedades_alquiler.html
├── README.md
│
└── assets
│
├── css
│ └── style.css
│
├── js
│ ├── venta.js
│ └── alquiler.js
│
└── img
├── imágenes de propiedades
└── imagen principal del banner


## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript ES6
- Manipulación del DOM

## Modelo de datos

Cada propiedad contiene información estructurada mediante objetos JavaScript:

```javascript
{
    nombre: "",
    src: "",
    descripcion: "",
    ubicacion: "",
    habitaciones: 0,
    costo: 0,
    smoke: false,
    pets: true
}

Los atributos smoke y pets son evaluados mediante condicionales para mostrar visualmente si la propiedad permite fumar o acepta mascotas.

Secciones del sitio
Página principal

Incluye:

Banner principal.
Propiedades destacadas en venta.
Propiedades destacadas en alquiler.
Accesos a los listados completos.
Propiedades en venta

Muestra todas las propiedades disponibles para compra con:

Imagen.
Nombre.
Descripción.
Ubicación.
Habitaciones.
Precio.
Información sobre mascotas y fumar.
Propiedades en alquiler

Muestra todas las propiedades disponibles para arriendo utilizando la misma estructura dinámica.

Autor

Alexandra Correa