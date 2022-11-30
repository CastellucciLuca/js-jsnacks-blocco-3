/**
*Crea due tag div con due id diversi.
*Un div avrà il testo colorato di rosso mentre l'altro di verde.
* Partendo da un array di numeri,
* creiamo un nuovo elemento p e lo stampiamo nell'div rosso  se è un numero dispari
* e nel div verde se è un numero pari.
*
*
*/
// funzione che crei un nuovo elemento <p> </p>
// restituirlo a chi invoca la funzione
//
// ciclo per ogni elemento dell'array
// se l'elemento è un numero pari, crei nuovo elemento e lo aggiungo al div verde
// se l'elemento è un numero dispari, creo  nuovo elemento e lo aggiungo al div rosso
const divElementGreen = document.getElementById('green');
const divElementRed = document.getElementById("red");
//FUNZIONE IMPORTANTE----
function createNewElementP(array,[i]){
    const newElement = document.createElement('p');
    newElement.innerText = array[i];
    return newElement;
}

const array = [1,33,55,64,33,22,10,44,88, 22, 7];

for (let i=0; i<array.length; i++){
    if (array[i] % 2 === 0){
        divElementGreen.appendChild(createNewElementP(array,[i]));
    }
    else {
        divElementRed.appendChild(createNewElementP(array,[i]));
    }
}
