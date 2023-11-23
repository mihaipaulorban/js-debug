/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}

/* L'esercizio rappresenta un loop che dovrebbe stampare numeri da 0 a 4, ma non funziona dato che i inizia da 0 
e nel ciclo for é richiesto che i sia maggiore di 5 per essere eseguito. 
Per funzionare il loop dovrebbe avere come condizione iniziale  `i < 5`.

for (let i = 0; i < 5; i++) {
    console.log(i);
}
*/

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}

/* Questa funzione dovrebbe restituire `num + 5` se `num`é un numero pari, altrimenti restituisce il valore 'num'.
C'é un errore nella condizione `if` in cui viene usato = invece di === o ==.

function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}
*/

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}

/* La funzione ha il compito di stampare i numeri da 0 a 4 utilizzando un loop for ma non sono state messe 
i punti e virgola per dividere le keyword, per risolverlo bisognerebee togloere le virgole e mettere i punti e virgola.

function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

*/

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

/* La funzione dovrebbe dare i numeri pari all'interno della variabile evenNumbers.
Gli errori sono la condizione del loop che esclude l'ultimo elemento dell'array, poi nell'if il % dovrebbe essere scritto cosí (numbers[i] % 2 === 0)
per controllare se il numero é pari o no e poi il punto e virgola dopo l'if e il return fa si che a funzione dia solo 0 se il primo
numero é pari, interrompendo l'esecuzione del loop

function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(i);
        }
    }
    return evenNumbers;
}

displayEvenNumbers();

*/
