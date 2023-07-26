//Clase:1

// Variables para los datos de los muebles
var nombreMueble = "Silla";
var colorMueble = "Blanco";
var materialMueble = "Madera";
var precioMueble = 50;
var descripcionMueble = "Una silla de madera blanca elegante.";

// Variables para los datos de las lámparas
var nombreLampara = "Lámpara de techo";
var colorLampara = "Plateado";
var materialLampara = "Metal";
var precioLampara = 80;
var descripcionLampara = "Una lámpara de techo moderna y elegante.";

// Mostrar información de los muebles
console.log("Mueble:");
console.log("Nombre: " + nombreMueble);
console.log("Color: " + colorMueble);
console.log("Material: " + materialMueble);
console.log("Precio: $" + precioMueble);
console.log("Descripción: " + descripcionMueble);

// Mostrar información de las lámparas
console.log("Lámpara:");
console.log("Nombre: " + nombreLampara);
console.log("Color: " + colorLampara);
console.log("Material: " + materialLampara);
console.log("Precio: $" + precioLampara);
console.log("Descripción: " + descripcionLampara);



//clase:2

// Variables para los datos de los muebles
var nombreMueble = "Silla";
var colorMueble = "Blanco";
var materialMueble = "Madera";
var precioMueble = 50;
var descripcionMueble = "Una silla de madera blanca elegante.";

// Variables para los datos de las lámparas
var nombreLampara = "Lámpara de techo";
var colorLampara = "Plateado";
var materialLampara = "Metal";
var precioLampara = 80;
var descripcionLampara = "Una lámpara de techo moderna y elegante.";

// Función para obtener información de un artículo
function obtenerInformacion(nombre, color, material, precio, descripcion) {
  return "Nombre: " + nombre + "\n" +
         "Color: " + color + "\n" +
         "Material: " + material + "\n" +
         "Precio: $" + precio + "\n" +
         "Descripción: " + descripcion;
}

// Control de flujo para los muebles
console.log("Mueble:");
if (nombreMueble && colorMueble && materialMueble && precioMueble && descripcionMueble) {
  console.log(obtenerInformacion(nombreMueble, colorMueble, materialMueble, precioMueble, descripcionMueble));
} else {
  console.log("No hay información disponible para el mueble.");
}

// Control de flujo para las lámparas
console.log("Lámpara:");
if (nombreLampara && colorLampara && materialLampara && precioLampara && descripcionLampara) {
  console.log(obtenerInformacion(nombreLampara, colorLampara, materialLampara, precioLampara, descripcionLampara));
} else {
  console.log("No hay información disponible para la lámpara.");
}


//Clase:3

// Definición de los muebles y lámparas en forma de arrays
var muebles = [
    ["Silla", "Blanco", "Madera", 50, "Una silla de madera blanca elegante."],
    ["Mesa", "Negro", "Acero", 120, "Una mesa de acero negra y resistente."],
    ["Sofá", "Gris", "Cuero", 300, "Un sofá de cuero gris cómodo y elegante."]
  ];
  
  var lamparas = [
    ["Lámpara de techo", "Plateado", "Metal", 80, "Una lámpara de techo moderna y elegante."],
    ["Lámpara de pie", "Negro", "Hierro", 60, "Una lámpara de pie de hierro negro con pantalla ajustable."],
    ["Lámpara de escritorio", "Blanco", "Plástico", 25, "Una lámpara de escritorio blanca con brazo flexible."]
  ];
  
  // Función para obtener información de un artículo
  function obtenerInformacion(articulo) {
    return "Nombre: " + articulo[0] + "\n" +
           "Color: " + articulo[1] + "\n" +
           "Material: " + articulo[2] + "\n" +
           "Precio: $" + articulo[3] + "\n" +
           "Descripción: " + articulo[4];
  }
  
  // Iteración sobre los muebles
  console.log("Muebles:");
  for (var i = 0; i < muebles.length; i++) {
    console.log(obtenerInformacion(muebles[i]));
  }
  
  // Iteración sobre las lámparas
  console.log("Lámparas:");
  for (var j = 0; j < lamparas.length; j++) {
    console.log(obtenerInformacion(lamparas[j]));
  }
  

//Clase:4

// Función para obtener información de un mueble
function obtenerInformacionMueble(nombre, color, material, precio, descripcion) {
    return "Nombre: " + nombre + "\n" +
           "Color: " + color + "\n" +
           "Material: " + material + "\n" +
           "Precio: $" + precio + "\n" +
           "Descripción: " + descripcion;
  }
  
  // Función para obtener información de una lámpara
  function obtenerInformacionLampara(nombre, color, material, precio, descripcion) {
    return "Nombre: " + nombre + "\n" +
           "Color: " + color + "\n" +
           "Material: " + material + "\n" +
           "Precio: $" + precio + "\n" +
           "Descripción: " + descripcion;
  }
  
  // Ejemplo de uso de las funciones
  console.log(obtenerInformacionMueble("Silla", "Blanco", "Madera", 50, "Una silla de madera blanca elegante."));
  console.log(obtenerInformacionLampara("Lámpara de techo", "Plateado", "Metal", 80, "Una lámpara de techo moderna y elegante."));

  //clase:5

// Definición del objeto "mueble"
var mueble = {
  nombre: "Silla",
  color: "Blanco",
  material: "Madera",
  precio: 50,
  descripcion: "Una silla de madera blanca elegante."
};

// Acceso a las propiedades del objeto
console.log(mueble.nombre); // "Silla"
console.log(mueble.color); // "Blanco"
console.log(mueble.material); // "Madera"
console.log(mueble.precio); // 50
console.log(mueble.descripcion); // "Una silla de madera blanca elegante."

// Modificación de propiedades del objeto
mueble.color = "Negro";
console.log(mueble.color); // "Negro"

// Definición de otro objeto "lampara"
var lampara = {
  nombre: "Lámpara de techo",
  color: "Plateado",
  material: "Metal",
  precio: 80,
  descripcion: "Una lámpara de techo moderna y elegante."
};

// Acceso a las propiedades del objeto "lampara"
console.log(lampara.nombre); // "Lámpara de techo"
console.log(lampara.color); // "Plateado"
console.log(lampara.material); // "Metal"
console.log(lampara.precio); // 80
console.log(lampara.descripcion); // "Una lámpara de techo moderna y elegante."


//clase:6

// Array para los muebles
var muebles = [
  ["Silla", "Blanco", "Madera", 50, "Una silla de madera blanca elegante."],
  ["Mesa", "Negro", "Acero", 120, "Una mesa de acero negra y resistente."],
  ["Sofá", "Gris", "Cuero", 300, "Un sofá de cuero gris cómodo y elegante."]
];

// Array para las lámparas
var lamparas = [
  ["Lámpara de techo", "Plateado", "Metal", 80, "Una lámpara de techo moderna y elegante."],
  ["Lámpara de pie", "Negro", "Hierro", 60, "Una lámpara de pie de hierro negro con pantalla ajustable."],
  ["Lámpara de escritorio", "Blanco", "Plástico", 25, "Una lámpara de escritorio blanca con brazo flexible."]
];

// Función para obtener información de un artículo
function obtenerInformacion(articulo) {
  return "Nombre: " + articulo[0] + "\n" +
         "Color: " + articulo[1] + "\n" +
         "Material: " + articulo[2] + "\n" +
         "Precio: $" + articulo[3] + "\n" +
         "Descripción: " + articulo[4];
}

// Recorrer y mostrar los muebles
console.log("Muebles:");
for (var i = 0; i < muebles.length; i++) {
  console.log(obtenerInformacion(muebles[i]));
}

// Recorrer y mostrar las lámparas
console.log("Lámparas:");
for (var j = 0; j < lamparas.length; j++) {
  console.log(obtenerInformacion(lamparas[j]));
}

//clase:7

// Array de muebles
var muebles = [
  { nombre: "Silla", color: "Blanco", material: "Madera", precio: 50, descripcion: "Una silla de madera blanca elegante." },
  { nombre: "Mesa", color: "Negro", material: "Acero", precio: 120, descripcion: "Una mesa de acero negra y resistente." },
  { nombre: "Sofá", color: "Gris", material: "Cuero", precio: 300, descripcion: "Un sofá de cuero gris cómodo y elegante." }
];

// Array de lámparas
var lamparas = [
  { nombre: "Lámpara de techo", color: "Plateado", material: "Metal", precio: 80, descripcion: "Una lámpara de techo moderna y elegante." },
  { nombre: "Lámpara de pie", color: "Negro", material: "Hierro", precio: 60, descripcion: "Una lámpara de pie de hierro negro con pantalla ajustable." },
  { nombre: "Lámpara de escritorio", color: "Blanco", material: "Plástico", precio: 25, descripcion: "Una lámpara de escritorio blanca con brazo flexible." }
];

// Función para obtener información de un artículo
function obtenerInformacion(articulo) {
  return "Nombre: " + articulo.nombre + "\n" +
         "Color: " + articulo.color + "\n" +
         "Material: " + articulo.material + "\n" +
         "Precio: $" + articulo.precio + "\n" +
         "Descripción: " + articulo.descripcion;
}

// Utilizar el método map para obtener información de los muebles
console.log("Muebles:");
muebles.map(function(articulo) {
  console.log(obtenerInformacion(articulo));
});

// Utilizar el método forEach para obtener información de las lámparas
console.log("Lámparas:");
lamparas.forEach(function(articulo) {
  console.log(obtenerInformacion(articulo));
});


//clase:8

// Esperamos a que el DOM cargue completamente antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {
// Acceder al header y crear un nuevo elemento "span"
const header = document.querySelector('La casona GB');
const newElement = document.createElement('span');
newElement.textContent = '¡bienvenido!';
header.appendChild(newElement);

// Cambiar el texto del elemento con la clase "diseño"
const diseñoElement = document.querySelector('.diseño');
diseñoElement.innerHTML = '<h1>Nuevo título</h1><p>Nuevo texto</p>';

// Ajustar el atributo "alt" de las imágenes
const images = document.querySelectorAll('.img6');
images.forEach((img, index) => {
  img.alt = `Imagen ${index + 1}`;
});
});

//clase:9

// Evento para cambiar el color de fondo del encabezado al hacer clic en él
const header = document.querySelector('header');
header.addEventListener('click', function() {
  const randomColor = getRandomColor();
  header.style.backgroundColor = randomColor;
});

// Evento para mostrar una alerta al pasar el mouse sobre el primer enlace del menú
const firstMenuLink = document.querySelector('.menu li:first-child a');
firstMenuLink.addEventListener('mouseover', function() {
  alert('¡Bienvenido! Haz clic para ver más información.');
});

// Función auxiliar para obtener un color aleatorio en formato hexadecimal
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}