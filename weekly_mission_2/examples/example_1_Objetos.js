console.log("Objetos");

// Ejemplo 1: Crear un objeto
console.log('\n--------------------------------------------------------------------------');
const myObjetc = {} // Esto es un objeto vacío
console.log("Ejemplo 1: Crear un objeto vacío")
console.log(myObjetc)

// Ejemplo 2: Crear un objeto con propiedades
console.log('\n--------------------------------------------------------------------------');
const myObjetc2 = {
    name: "Dann",
    age: 27
}
console.log("Ejemplo 2: Crear un objeto con propiedades")
console.log(myObjetc2)


// Ejemplo 3: Objeto con diferentes propiedades
console.log('\n--------------------------------------------------------------------------');
const myObject3 = {
    name: "Gundus",
    age: 3,
    nicknames: [
        "Gundus",
        "Gundusaurio",
        "Gundon"
    ],
    address: {
        zip_code: "22686",
        street: "Los Rayones",
        city: "San Pedro"
    }
}
console.log("Ejemplo 3: Objeto con diferentes propiedades")
console.log(myObject3)
console.log(myObject3.name)
console.log(myObject3["address"])


// Ejemplo 4: Objeto con métodos
console.log('\n--------------------------------------------------------------------------');
const pet = {
    name: "Gundus",
    // Esta es una función que se guarda como propiedad
    sayHello: function () {
        // this.name hace referencia a la propiedad del objeto
        console.log(`${this.name} te saluda en español!`)
    }
}

console.log("Ejemplo 4: Objeto con métodos")
pet.sayHello()

  // Ejemplo 5: Objeto con método que recibe parámetros
  console.log('\n--------------------------------------------------------------------------');
  const myPet = {
    name: "Gundus",
    sayHelloToMyPet: function(yourPet){
      console.log(`${this.name} say's hello to ${yourPet}`)
    }
  }
  
  console.log("Ejemplo 5: Objeto con método que recibe parámetros")
  myPet.sayHelloToMyPet("Tisa");