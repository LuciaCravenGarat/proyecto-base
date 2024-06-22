class Curso {
    constructor (nombre, duracion, cantAl, docentes)
    {
        this.nombre=nombre;
        this.duracion=duracion;
        this.cantAl=cantAl;
        this.docentes=docentes
    }
    agregarDocente(obj){
        this.docentes.push()
    }
    agregarAlumnos(alumnos){
        this.alumnos=alumnos
    }
}

let curso1 = new Curso ("HTML", 3, 20, ["Luis", "Camila"]);
console.log(curso1.docentes);
console.log(curso1.alumnos);