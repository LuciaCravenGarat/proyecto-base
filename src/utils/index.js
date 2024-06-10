const urlUsuarios = "http://localhost:3000/users";

const urlProductos = "http://localhost:3000/products";

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
export const capturarProductos = async()=> 
{
    try {
        let productos = await fetch(urlProductos)
        return productos.json()
    } catch (error) {
        console.log(error);
    }
}

//Función PUT (UPTADE)
export const updateProducto = async(id, obj)=>{ 
    console.log(obj);
    try {
        let producto = await axios.put(`${urlProductos}/${id}`, obj); //le paso la ruta-url y el identificador de lo que voy a cambiar:id. Y a continuación el objeto que vamos a cambiar, la pripiedad
        return producto
    } catch (error) {
        console.log(error);
    }
}


//Función POST (CREATE):
export const crearProducto = async(obj)=> {
    try {
        let producto = await axios.post(urlProductos, obj);
        return producto
    } catch (error) {
        console.log(error);
    }
}

// crearUsuario({nombre: "Ana", apellido: "Perez"})


//Función DELETE (DELETE):
export const eliminarProducto = async(id)=> {
    try {
        let producto = await axios.delete(`${urlProductos}/${id}`);
        return producto
    } catch (error) {
        console.log(error);
    }
};

