// Continuare a chiedere all'utente un numero tra 1 e 10 fino a quando l'utente non inserisce il valore corretto
let userNumber = 0;
//Chiedo all'utente compreso dall'1 al 10 **Se il numero non è compreso riappare la stringa**
while((userNumber < 1) || (userNumber > 10)){
    userNumber =  parseInt(prompt("Inserisci un numero da 1 a 10"));
}
console.log(userNumber)