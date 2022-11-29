/**
* Crea una funzione che dato un array, calcoli la somma dei suoi elementi.
*/
const array = ['Hello', 2, 55, 'Luca', 24];

function sumArray (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if( !(Number.isNaN( parseInt(array[i])) ) ) {
            sum += array[i];
        }
    }
    console.log(sum);
}

sumArray(array);