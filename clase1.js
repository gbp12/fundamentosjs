var gonzalo = {
    nombre: "gonzalo",
    apellido: "bonilla",
    edad: 19
}

var helena = {
    nombre: "helena",
    edad: 25,
    apellido: "bonilla"

}

function saludo(persona) {
   persona.edad += 1;
    console.log(`hola ${persona.nombre} tienes ${persona.edad} años!`);

}



saludo(gonzalo)
saludo(helena)