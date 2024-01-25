let ungleich = 0;
let Zahl18oder17 = 0;
 
for (let i = 0; i < 100; i++) {
    let randomNumber = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
    if (randomNumber > 12)  {
        console.log(randomNumber);
        Zahl18oder17++;
    } else {
        ungleich19++;
    }
}
 
console.log("Anzahl an ungleich19: " + wenigerAls12);
console.log("Anzahl an 18 und 17 Zahlen:" + größerAls12);