// Definición de muebles y lámparas como objetos
const muebles = [
  {
    nombre: "Silla",
    color: "Blanco",
    material: "Madera",
    precio: 50,
    descripcion: "Una silla de madera blanca elegante."
  },
  {
    nombre: "Mesa",
    color: "Negro",
    material: "Acero",
    precio: 120,
    descripcion: "Una mesa de acero negra y resistente."
  },
  {
    nombre: "Sofá",
    color: "Gris",
    material: "Cuero",
    precio: 300,
    descripcion: "Un sofá de cuero gris cómodo y elegante."
  }
];

const lamparas = [
  {
    nombre: "Lámpara de techo",
    color: "Plateado",
    material: "Metal",
    precio: 80,
    descripcion: "Una lámpara de techo moderna y elegante."
  },
  {
    nombre: "Lámpara de pie",
    color: "Negro",
    material: "Hierro",
    precio: 60,
    descripcion: "Una lámpara de pie de hierro negro con pantalla ajustable."
  },
  {
    nombre: "Lámpara de escritorio",
    color: "Blanco",
    material: "Plástico",
    precio: 25,
    descripcion: "Una lámpara de escritorio blanca con brazo flexible."
  }
];

// Función para obtener información de un artículo
function obtenerInformacion(articulo) {
  return `Nombre: ${articulo.nombre}
Color: ${articulo.color}
Material: ${articulo.material}
Precio: $${articulo.precio}
Descripción: ${articulo.descripcion}`;
}

// Mostrar información de los muebles
console.log("Muebles:");
muebles.forEach((mueble) => {
  console.log(obtenerInformacion(mueble));
});

// Mostrar información de las lámparas
console.log("Lámparas:");
lamparas.forEach((lampara) => {
  console.log(obtenerInformacion(lampara));
});

// Resto de mi código
// ...

