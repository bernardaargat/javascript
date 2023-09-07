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

// Datos de ejemplo de servicios de decoración
const serviciosDecoracion = [
  {
      nombre: "Interiorismo",
      imagen: "../img/interiorismo.jpeg",
      enlace: "https://www.canva.com/design/DAFkCpiseQ0/caEB-9sMmcW5eXHaQKG1KA/edit?utm_content=DAFkCpiseQ0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
      nombre: "Reformas",
      imagen: "../img/reformas.jpeg",
      enlace: "https://www.canva.com/design/DAFkCpHOWS4/wURy3qGZGYNTbMtB0Mmd6Q/edit?utm_content=DAFkCpHOWS4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
      nombre: "Asesoría",
      imagen: "../img/asesoria3.jpeg",
      enlace: "https://www.canva.com/design/DAFkCs5QpcA/r893VwQNAI7x2SCBZmjkgQ/edit?utm_content=DAFkCs5QpcA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  }
];

// Función para renderizar los servicios de decoración
function renderizarServicios() {
  const serviciosContainer = document.querySelector('.container1');

  serviciosDecoracion.forEach(servicio => {
      const servicioCard = document.createElement("div");
      servicioCard.classList.add("card");

      const imagen = document.createElement("figure");
      const img = document.createElement("img");
      img.src = servicio.imagen;
      img.alt = servicio.nombre;
      imagen.appendChild(img);

      const contenido = document.createElement("div");
      contenido.classList.add("contenido");

      const nombreServicio = document.createElement("p");
      nombreServicio.textContent = servicio.nombre;

      const enlace = document.createElement("a");
      enlace.textContent = "Mirar";
      enlace.href = servicio.enlace;
      enlace.target = "_blank"; // Abrir el enlace en una nueva ventana/tab

      contenido.appendChild(nombreServicio);
      contenido.appendChild(enlace);

      servicioCard.appendChild(imagen);
      servicioCard.appendChild(contenido);

      serviciosContainer.appendChild(servicioCard);
  });
}

// Llamar a la función para renderizar los servicios al cargar la página
renderizarServicios();

const renderizarServicios = () => {
  const serviciosContainer = document.querySelector('.container1');

  serviciosDecoracion.forEach(servicio => {
    const servicioCard = document.createElement("div");
    servicioCard.classList.add("card");

    const imagen = document.createElement("figure");
    const img = document.createElement("img");
    img.src = servicio.imagen;
    img.alt = servicio.nombre;
    imagen.appendChild(img);

    const contenido = document.createElement("div");
    contenido.classList.add("contenido");

    const nombreServicio = document.createElement("p");
    nombreServicio.textContent = servicio.nombre;

    const enlace = document.createElement("a");
    enlace.textContent = "Mirar";
    enlace.href = servicio.enlace;
    enlace.target = "_blank"; // Abrir el enlace en una nueva ventana/tab

    contenido.appendChild(nombreServicio);
    contenido.appendChild(enlace);

    servicioCard.appendChild(imagen);
    servicioCard.appendChild(contenido);

    serviciosContainer.appendChild(servicioCard);
  });
}


$(document).ready(function() {
  const serviciosContainer = $('.container1');

  serviciosDecoracion.forEach(servicio => {
    const servicioCard = $('<div>').addClass('card');
    
    const imagen = $('<figure>');
    const img = $('<img>').attr('src', servicio.imagen).attr('alt', servicio.nombre);
    imagen.append(img);

    const contenido = $('<div>').addClass('contenido');

    const nombreServicio = $('<p>').text(servicio.nombre);

    const enlace = $('<a>').text('Mirar').attr('href', servicio.enlace).attr('target', '_blank');

    contenido.append(nombreServicio);
    contenido.append(enlace);

    servicioCard.append(imagen);
    servicioCard.append(contenido);

    serviciosContainer.append(servicioCard);
  });
});


// Función para obtener datos de servicios de decoración utilizando fetch
function obtenerServicios() {
  return fetch('URL_DEL_API_O_DATOS_JSON')
    .then(response => {
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
      return response.json();
    })
    .then(data => {
      return data; // Devuelve los datos obtenidos
    })
    .catch(error => {
      console.error('Error:', error);
    });
}


function renderizarServicios() {
  const serviciosContainer = document.querySelector('.container1');

  obtenerServicios().then(servicios => {
    servicios.forEach(servicio => {
      const servicioCard = document.createElement('div');
      servicioCard.classList.add('card');

      const imagen = document.createElement('figure');
      const img = document.createElement('img');
      img.src = servicio.imagen;
      img.alt = servicio.nombre;
      imagen.appendChild(img);

      const contenido = document.createElement('div');
      contenido.classList.add('contenido');

      const nombreServicio = document.createElement('p');
      nombreServicio.textContent = servicio.nombre;

      const enlace = document.createElement('a');
      enlace.textContent = 'Mirar';
      enlace.href = servicio.enlace;
      enlace.target = '_blank'; // Abrir el enlace en una nueva ventana/tab

      contenido.appendChild(nombreServicio);
      contenido.appendChild(enlace);

      servicioCard.appendChild(imagen);
      servicioCard.appendChild(contenido);

      serviciosContainer.appendChild(servicioCard);
    });
  });
}

// Llamar a la función para renderizar los servicios al cargar la página
renderizarServicios();

// Función para obtener datos de un archivo JSON local
function obtenerDatosDesdeJSON() {
  return fetch('servicios.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
      return response.json();
    })
    .then(data => {
      return data; // Devuelve los datos obtenidos desde el archivo JSON local
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
// Función para obtener datos de servicios de decoración desde una API externa
function obtenerServiciosDesdeAPI() {
  return fetch('URL_DEL_API')
    .then(response => {
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
      return response.json();
    })
    .then(data => {
      return data; // Devuelve los datos obtenidos desde la API externa
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
