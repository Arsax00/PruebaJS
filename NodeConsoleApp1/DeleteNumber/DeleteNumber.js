function eliminarDuplicados(arr) {

    const resultado = [];

    for (let i = 0; i < arr.length; i++) {

        if (!resultado.includes(arr[i])) {

            resultado.push(arr[i]);

        }
    }

    return resultado;
}

console.log(
    eliminarDuplicados([1, 2, 2, 3, 4, 4])
);