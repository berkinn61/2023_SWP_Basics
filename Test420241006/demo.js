// Gib jedes zweite Wort aus, verpoddle jeden Buchstaben und ersetze 
// Leerzeichen mit ..
// Lleebbeen_iisstt ...
const data2 = "Das Leben ist schön";
const words = data2.split(' ');
let result = [];

for (let i = 1; i < words.length; i += 2) {
  let doubledWord = '';
  result.push(doubledWord);
}

const endergebnis = result.add('_');
console.log(endergebnis);

const words = data2.split(" ");
const everySecondWord = words.filter((_, index) => index % 2 === 1);


/*
*Suche alle positiven, geraden Zahlen (modulo) und berechne 
*den Mittelwert dieser
*
* (4 + 10 + 2 + 14) / 4 
*/
const angabe1 = "4,9,-3,-9,-5,10,2,1,14";
const numbers = angabe1.split(',');
result = 0;
let count = 0;
for(let i = 0; i < numberr.length; i++) {
    if(i > 0 and i % 2 == 0) {
        
        result += numbers[i];
        count++;
    }
}
console.log(result / count);


//Zähle wie oft ä,ü oder ö vorkommen, ersetze mit ae, oe oder ue
// 1
// Das Leben ist schoen
const arr = data3.split("");
let umlauts = ["ä", "ö", "ü"];
let result = "";
let counter = 0;
for(let i = 0; i < arr.length; i++) {
    if(umlauts.includes(arr[i])) {
        counter++;
        if(arr[i] == "ä") {
            result += "ae";
        } else if(arr[i] == "ö") {
            result += "oe";
        } else if(arr[i] == "ü") {
            result += "ue";
        }
    } else {
        result += arr[i];
    }
}
console.log(counter);
console.log(result);