var gonzalo = {
    nombre: "gonzalo",
    apellido: "bonilla",
    edad: 19,
    perezoso: true
}

var helena = {
    nombre: "helena",
    edad: 25,
    apellido: "bonilla",
    perezoso: false

}
/*
function saludo(persona) {
   persona.edad += 1;
    console.log(`hola ${persona.nombre} tienes ${persona.edad} años!`);

} */


function pereza(persona) {
    switch (persona.perezoso) {
        case true:
            console.log(`${persona.nombre} es un perezoso!`);
            break;
    
        case false:
            console.log(`${persona.nombre} no es una perezoso!`);
            break
    }
    
}




class persona {
    constructor(nombre, apellido, altura, guapo) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
        this.guapo = true
    }
    

    saludar() {
        console.log(`hola mi nombre es ${this.nombre} y soy desarrollador`);
    }


    belleza() {
        switch (this.guapo) {
            case true:
                console.log("eres guapo");
                
                break;
        
            case false:
                console.log("eres feo");
                break;
        }
    }
    
}

 class jugador extends persona{
     constructor(nombre, apellido, altura, guapo) {
         super(nombre, apellido, altura, guapo)
         this.guapo = false
     }

     belleza() {
         console.log(`tu gracia es ${this.guapo}`);
     }


 }







var gonzalo = new persona("gonzalo", "bonilla", 1.78, false)
var alberto = new jugador("alberto", "bonilla", 1.5, true)