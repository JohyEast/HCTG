
 // Nombres personalizados para los botones
 const nombresBotones = ["Consultas Legales / Oficios judiciales", "Turnos y Admisiones", "Consultas de Enfermería"];
  // Mensajes personalizados para cada botón
  const mensajesBotones = [
    "Seleccionó Consultas Legales / Oficios Judiciales: Los mismos deben enviarse a tobar_direccion@buenosaires.gob.ar",
    "Seleccionó Turnos y Admisiones: Los turnos se otorgan una vez que se es paciente del Hospital. Debe solicitar turno de orientación al +54 (11) 4363-5055 de lunes a viernes de 8.00 hs a 14.00 hs. Si hay riesgo para el paciente o para otras personas puede consultar por guardia las 24 hs",
    "Seleccionó Consultas de Enfermería: Las mismas deben enviarse a enfermeriatobargarcia@gmail.com "
  ];
    // Contenedor donde se agregarán los botones
 const container = document.getElementById("botones_container");

 for (let i = 0; i < nombresBotones.length; i++) {
     // Crear el botón
     const boton = document.createElement("button");

     // Asignar texto al botón desde el array
     boton.innerHTML = nombresBotones[i];
     boton.className = "boton"; // Añadir una clase para darle estilo

// Asignar un evento click para mostrar un mensaje personalizado
boton.addEventListener("click", () => {
    alert(mensajesBotones[i]); // Mostrar el mensaje correspondiente
});

// Añadir el botón al contenedor
container.appendChild(boton);
}

const botones_container2 = document.getElementById("botones_container2");
// Crear el botón
const boton2 = document.createElement("button");

// Asignar texto al botón desde el array
boton2.innerHTML = "Contacto Docencia";
boton2.className = "boton"; // Añadir una clase para darle estilo

// Asignar un evento click para mostrar un mensaje personalizado
boton2.addEventListener("click", () => {
alert("Seleccionó Docencia: para consultas puede enviar un mail a docenciatobargarcia@gmail.com"); // Mostrar el mensaje correspondiente
});

// Añadir el botón al contenedor
botones_container2.appendChild(boton2);