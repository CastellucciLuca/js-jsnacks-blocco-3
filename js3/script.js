// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.
//DUE ARRAY
const arrayOne = [
    'first element',
    'second element',
    'third element',
    'fourth element',
    'fifth element',
    'sixth element',
    'seventh element',
    'eight element',
    'ninth element',
    'tenth element',
];
const arrayTwo = [
    'first element',
    'second element',
    'third element',
    'fourth element',
    'fifth element',
];
// AGGIUNGO ELEMENTI ALL'ARRAY FINCHE NON DIVENTANO EQUAMENTE UGUALI
while (arrayOne.length != arrayTwo.length){
    if (arrayOne.length < arrayTwo.length){
        arrayOne.push('filler');
    } else if (arrayOne.length > arrayTwo.length){
        arrayTwo.push('filler');
    }
}

console.log(arrayOne);
console.log(arrayTwo);