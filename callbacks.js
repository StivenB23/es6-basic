function callStudent(alumno, callback) {
    let callStudent = `Llamando alumno: ${alumno}`;
    // execute function callback
    callback(callStudent);
}
// define function callback
function showText(text){
    console.log(text);
}

// invoque the function main callStudent
callStudent("Stive Ospina", showText)