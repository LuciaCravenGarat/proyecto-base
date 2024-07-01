//CALLBACKS: volver a llamar a esa función luego de resolver. Cuando termine las operaciones, pasa el resultado o la info requerida. A la llamada de vuelta a la función callback, normalmente, se le pasa alguna información (dato, resultado, etc)

// const doAsyncStuffWhitCallback = (num1, num2, callback) => {
//     const result = num1 + num2
//     return setTimeout (() => { //el setTimeout es para simular la demora del pedido de datos al servidor o API
//         callback(result)
//     }), 500
// };

// doAsyncStuffWhitCallback(1, 5, (result) => {
//     console.log(result);
// });

//PROMISES: no recibe callback, sino que retorna una nueva promesa que devuelve el resultado una vez que la operación se resuelve

// const doAsyncStuffWhitPromises = (num1, num2) => {
//     const resultado = num1 * num2
//     return new Promise (resolve => { //el "resolve" puede entenderse como un callback
//         setTimeout(() => {resolve(resultado)
//     }, 500)
// })
// };

// doAsyncStuffWhitPromises(5, 5).then(result => console.log(result));

//ejemplo 2 de promesas:
// const data = [
//   {
//     title: "JavaScript",
//     year: 2562,
//     isbn: 3333,
//     author: "Tute",
//   },

//   {
//     title: "React",
//     year: 5478,
//     isbn: 7777,
//     author: "Pepe",
//   },

//   {
//     title: "Node js",
//     year: 5236,
//     isbn: 5555,
//     author: "Mate",
//   },
// ];

// function getData() {
//   return new Promise((resolve, reject) => {
//     if (data.length === 0) {
//       reject(new Error("Data is empty"));
//     }

//     setTimeout(() => {
//       resolve(data);
//     }, 5000);
//   });
// }

// getData()
//     .then((response) => console.log(response))
//     .catch ((err)=> console.log(err.message));

//ASYNC AWAIT:

// async function fetchingBooks() {
//   try {
//     const books = await getData(); //await sustituye al .then y .catch de las promesas
//     console.log(books);
//   } catch {
//     console.log("Ha sucedido un error", error);
//   }
// }

// fetchingBooks();
