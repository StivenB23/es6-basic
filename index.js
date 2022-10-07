import asignatures from "./asignatures.js";
import pkg from 'colors';
asignatures.forEach((course)=>{
    if (course.type === "technical") {
        console.log(`Materia: ${course.name}`.rainbow);
        console.log(`Profesor: ${course.instructor}`.green);
    }
});
// console.log(`Potencia: ${potence(2, 2)}`)

// map
const teachers = asignatures.map((course)=>{
    return course.instructor
})

// find
const Backend = asignatures.find((course)=>{
    return course.instructor === "Stive Ospina";
})
asignatures.push(
    {
        id:5,
        name:"UX",
        instructor:"Jennifer",
        type: "technical",
        mark: [
            5.0,
            3,
            4.2
        ]
    }
)
const ages = [3, 10, 18, 20];


const course = asignatures.findIndex((course)=>{
    return course.name === "Backend Master";
})
console.log(course)
asignatures.splice(course.id,1);
