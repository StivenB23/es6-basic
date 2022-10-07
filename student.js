 const colors = require('colors');

 const array1 = ["Manzana", "Uva", "Piña"];
 const frutas = [ ...array1, "Pera"];
 const student = {
    id: 1,
    name: 'Stive',
    lastname: 'Ospina',
    identification: '1106769976',
    age: 17,
    frutas: [...frutas]
 }

const {id,name, lastname, identification, age} = student;

console.log(`ID: ${id}`.blue+`\nNAME: ${name}`.blue+`\nLASTNAME: ${lastname}`.blue+`\nIDENTIFICATION: ${identification}`.blue+`\nAGE: ${age}`.blue);

let students = ['Stive','Laura','Camilo','Ana'];
let [Stive, Laura, Camilo, Ana] = students;
