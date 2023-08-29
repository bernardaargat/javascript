// Definición de los servicios en forma de objetos
var servicios = [
  {
    nombre: "Servicio 1",
    descripcion: "Descripción del Servicio 1.",
    imagen: "../img/servicio1.jpg",
    enlace: "#"
  },
  {
    nombre: "Servicio 2",
    descripcion: "Descripción del Servicio 2.",
    imagen: "../img/servicio2.jpg",
    enlace: "#"
  },
  {
    nombre: "Servicio 3",
    descripcion: "Descripción del Servicio 3.",
    imagen: "../img/servicio3.jpg",
    enlace: "#"
  }
];

// Función para mostrar dinámicamente los servicios
function mostrarServicios() {
  var serviciosContainer = document.querySelector('.servicios-container');

  servicios.forEach(function(servicio) {
    var servicioCard = document.createElement('div');
    servicioCard.classList.add('card');

    var imagen = document.createElement('img');
    imagen.src = servicio.imagen;
    imagen.alt = servicio.nombre;

    var contenido = document.createElement('div');
    contenido.classList.add('contenido');

    var nombre = document.createElement('p');
    nombre.textContent = servicio.nombre;

    var descripcion = document.createElement('p');
    descripcion.textContent = servicio.descripcion;

    var enlace = document.createElement('a');
    enlace.href = servicio.enlace;
    enlace.textContent = 'Más información';

    contenido.appendChild(nombre);
    contenido.appendChild(descripcion);
    contenido.appendChild(enlace);

    servicioCard.appendChild(imagen);
    servicioCard.appendChild(contenido);

    serviciosContainer.appendChild(servicioCard);
  });
}

// Llama a la función para mostrar los servicios cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
  mostrarServicios();
});


