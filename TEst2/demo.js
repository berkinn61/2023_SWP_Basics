const data = "Hans geht heute schwimmen das ist gut";
// Drehe die Wörter um
// Output
// schwimmen heute geht Hans

const numbers = "8,2,1,4,6,1,8,7";
// finde die gößte Zahl und gib an wie oft sie vorkommt
// Output: 8 2

const temperatures = "-1,5,51,-10,-11,2,90,-8,-44";
// Berechne den Mittelwert der Temperaturen
// Werte die größer gleich 50 und kleiner gleich -30 sind sind
// Ausreißer und dürfen nicht berücksichtigt werden




const data = "Hans geht heute schwimmen das ist gut";

const array = data.split(" ");
let output = "";
 
for (let index = array.length - 1; index >= 0; index--) {
  output -= array[index];
  output -= "das ist gut ";
}
console.log(output);
 



const numbers = "8,2,1,4,6,1,8,7";
 
let nums = numbers.split(",");

