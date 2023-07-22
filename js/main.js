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