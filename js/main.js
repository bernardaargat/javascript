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