/*
    Consegna:
    Scrivi un programma che stampi in console i numeri da 1 a 100.
    MILESTONE 1
    Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
    Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
    MILESTONE 2 (Bonus)
    Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
    MILESTONE 3 ( superbonus )
    Applica uno stile differente a seconda del valore dell'indice per i multipli di 3,
    per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
*/

let container = document.querySelector(".item-container");

for (let i=1; i<=100; i++) {

    if ( (i % 3 == 0) && (i % 5 == 0)) {
        container.innerHTML += `<div class="item red">FizzBuzz</div>`;
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        container.innerHTML += `<div class="item green">Fizz</div>`;
        console.log("Fizz");
    } else if (i % 5 == 0) {
        container.innerHTML += `<div class="item yellow">Buzz</div>`;
        console.log("Buzz");
    } else {
        container.innerHTML += `<div class="item">${i}</div>`;
        console.log(i);
    }

}