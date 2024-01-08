let wenigerAls12 = 0;
let größerAls12 = 0;
 
for (let i = 0; i < 100; i++) {
    let randomNumber = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
    if (randomNumber > 12) {
        console.log(randomNumber);
        größerAls12++;
    } else {
        wenigerAls12++;
    }
}
 
console.log("Anzahl der Zahlen kleiner oder gleich 12: " + wenigerAls12);
console.log("Anzahl der Zahlen größer als 12: " + größerAls12);