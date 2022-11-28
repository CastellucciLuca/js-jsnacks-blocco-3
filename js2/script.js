// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.
let sum = 0;
//Chiedo un numero fino ad arrivare ad una somma >= 50
while (sum < 50) {
    const userNumber = parseInt(prompt('Insert a Number'));
    sum += userNumber;
}
console.log('Sum is:' + sum);