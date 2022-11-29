// Prendere due array della stessa lunghezza e generarne un terzo, prendendo alternativamente gli elementi da uno e dall'altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
arrayA = [1,2,3,4,5,6,7,8];
arrayB = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
arrayC = [];

for ( let i = 0 ; i < arrayA.length ; i++) {
    arrayC.push(arrayA[i]);
    arrayC.push(arrayB[i]);
}

console.log(arrayC);