//CALLBACKS: volver a llamar a esa función luego de resolver. Cuando termine las operaciones, pasa el resultado o la info requerida. A la llamada de vuelta a la función callback, normalmente, se le pasa alguna información (dato, resultado, etc)

const doAsyncStuffWhitCallback = (num1, num2, callback) => {
    const result = num1 + num2
    return setTimeout (() => {
        callback(result)
    }), 500
};

doAsyncStuffWhitCallback(1, 5, (result) => {
    console.log(result);
});

//PROMISES: no recibe callback, sino que retorna una nueva promesa que devuelve el resultado una vez que la operación se resuelve

const doAsyncStuffWhitPromises = (num1, num2) => {
    const resultado = num1 * num2
    return new Promise (resolve => { //el "resolve" puede entenderse como un callback
        setTimeout(() => {resolve(resultado)
    }, 500)
})
};


doAsyncStuffWhitPromises(5, 5).then(result => console.log(result));