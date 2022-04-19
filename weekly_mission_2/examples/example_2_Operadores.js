// Ejemplo 1: for Each para imprimir elementos de una lista
console.log('\n--------------------------------------------------------------------------');
const numbers = [1, 2, 3, 4, 5];
console.log("Ejemplo 1: Imprimiendo los elementos de una lista");
numbers.forEach(num => console.log(num));

// Ejemplo 2: for Each para calcular la suma de todos los elementos de una lista
console.log('\n--------------------------------------------------------------------------');
let sum = 0;
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach(num => sum += num);
console.log("Ejemplo 2: Cálculo de la suma de los elementos de la lista");
console.log(sum);

// Ejemplo 3: forEach para imprimir los países en letras mayúsculas
console.log('\n--------------------------------------------------------------------------');
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
console.log("Ejemplo 3: Imprimiendo la lista de países en mayúsculas");
countries.forEach((element) => console.log(element.toUpperCase()));

// Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista
console.log('\n--------------------------------------------------------------------------');
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
const numbers4 = [1, 2, 3, 4, 5];
const numbersSquare = numbers4.map(function(num){ return num * num});
// También puedes escribir la función como fat arrow
//const numbersSquare = numbers4.map((num) => return num * num)
console.log("Ejemplo 4: Imprimiendo la lista de elementos al cuadrado");
console.log(numbersSquare);

// Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas
console.log('\n--------------------------------------------------------------------------');
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const namesToUpperCase = names.map((name) => name.toLowerCase());

console.log("Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas");
console.log(namesToUpperCase);

// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas
console.log('\n--------------------------------------------------------------------------');
const countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
const countriesFirstThreeLetters = countries6.map((country) =>
  country.toUpperCase().slice(0, 3) // el método slice obtiene solo la longitud marcada del string
);
console.log("Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas");
console.log(countriesFirstThreeLetters);

// Ejemplo 7: Uso de filter para filtrar una lista de elementos
console.log('\n--------------------------------------------------------------------------');
const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
const countriesContainingLand = countries7.filter((country) => // esta es una función
  country.includes('land') // indicación para solo filtrar elementos que incluyan "land"
);
console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos");
console.log(countriesContainingLand);
const countriesEndsByia = countries.filter((country) => country.endsWith('ia'));
console.log("Ejemplo 7: Paises que terminan en i");
console.log(countriesEndsByia);

// Ejemplo 8: Filtrar una lista por condicional
console.log('\n--------------------------------------------------------------------------');
const scores = [
  { name: 'A', score: 95 },
  { name: 'L', score: 98 },
  { name: 'M', score: 80 },
  { name: 'E', score: 50 },
  { name: 'M', score: 85 },
  { name: 'J', score: 100 },
];

const scoresGreaterEighty = scores.filter((score) => score.score > 80);
console.log("Ejemplo 8: Filtrando elementos por score");
console.log(scoresGreaterEighty);

// Ejemplo 9: Uso del reduce
console.log('\n--------------------------------------------------------------------------');
const numbers9 = [1, 2, 3, 4, 5];
const result_of_reduce = numbers9.reduce((acc, element) => acc + element, 0);
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista");
console.log(result_of_reduce);

// Ejemplo 10: uso de every nos ayuda a validar todos los elementos de una lista, si todos cumplen con la validación que indiques te regresa true, de lo contrario false
console.log('\n--------------------------------------------------------------------------');
const names10 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4'];
const areAllStr = names10.every((name) => typeof name === 'string'); // every
console.log("Ejemplo 10: Son todos los nombres string: " + areAllStr);

// Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques
console.log('\n--------------------------------------------------------------------------');
const ages = [24, 22, 19, 25, 32, 35, 18];
const age = ages.find((age) => age < 20);
console.log("Ejemplo 11: Primera edad menor a 20 es: "+ age);

// Ejemplo 12: Uso de find en una lista de objetos
console.log('\n--------------------------------------------------------------------------');
const scores12 = [
  { name: 'A', score: 95 },
  { name: 'M', score: 80 },
  { name: 'E', score: 50 },
  { name: 'M', score: 85 },
  { name: 'J', score: 100 },
];

const score_less_than_80 = scores12.find((user) => user.score > 80);
console.log("Ejemplo 12. Name score found:" + score_less_than_80.name);

// Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques.
console.log('\n--------------------------------------------------------------------------');
const names13 = ['Explorer 1', 'Explorer 2', 'Explorer 3'];
const result = names13.findIndex((name) => name.length > 7);
console.log("Ejemplo 13: Primer elemento cuya palabra sea mayor a 7 esta en la posición "+ result);

// Ejemplo 14: Uso de some, este método validará todos los elementos de la lista, y si alguno cumple con la validación indicada, regresará true, de lo contrario será false.
console.log('\n--------------------------------------------------------------------------');

// lista de elementos
const bools = [true, true, false, true];
// Uso de Some para ver si al menos uno de los elementos es false
const areSomeTrue = bools.some((b) =>  b === false);
console.log("Ejemplo 14: Alguno de los elementos en el array es false: " + areSomeTrue); //true

