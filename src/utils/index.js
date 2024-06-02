const urlUsuarios = "http://localhost:3000/usuarios";

const urlProductos = "http://localhost:3000/productos";

import axios from 'axios';

//Función asincrónica, versión 1:
//1) el fetch busca la url de la base de datos
//2) el primer then convierte esos datos en data manipulable por JS
//3) el segundo then muestra el array con los datos interpretables por JS 
// export const capturarProductos = () => {
//     fetch(urlProductos).then(response=>response.json()).then(data=>console.log(data)).catch(error=>console.log(error))
// };

// let datos = capturarProductos();
// console.log(datos);


//Versión 2:

//Función GET del CRUD (READ)
export const capturarUsuarios = async()=> 
{
    try {
        let usuarios = await fetch(urlUsuarios)
        return usuarios.json()
    } catch (error) {
        console.log(error);
    }
}

//Función PUT (UPTADE)
export const updateUsuario = async(id, obj)=>{ 
    console.log(obj);
    try {
        let usuario = await axios.put(`${urlUsuarios}/${id}`, obj); //le paso la ruta-url y el identificador de lo que voy a cambiar:id. Y a continuación el objeto que vamos a cambiar, la pripiedad
        return usuario
    } catch (error) {
        console.log(error);
    }
}

updateUsuario(1, {nombre: "Lucia", apellido: "nuevo apellido"})

//Función POST (CREATE):
export const crearUsuario = async(obj)=> {
    try {
        let usuario = await axios.post(urlUsuarios, obj);
        return usuario
    } catch (error) {
        console.log(error);
    }
}

// crearUsuario({nombre: "Ana", apellido: "Perez"})


//Función DELETE (DELETE):
export const eliminarUsuario = async(id)=> {
    try {
        let usuario = await axios.delete(`${urlUsuarios}/${id}`);
        return usuario
    } catch (error) {
        console.log(error);
    }
};

eliminarUsuario("e3f9");