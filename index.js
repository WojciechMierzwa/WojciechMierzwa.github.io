/*const fs = require("fs");
const data = fs.readFileSync('package.json');
console.log("Początek skryptu.");
console.log(data.toString());
console.log("Koniec skryptu.");*/

const fs = require("fs");
console.log("Początek skryptu.");
fs.readFile('package.json', function (err, data) {
if (err) return console.error(err);
console.log(data.toString());
});
console.log("Koniec skryptu.");

//WNIOSEK

//1 Skrypt
//Blokujące wywołania: Program czeka, aż zakończy się operacja, co może spowalniać inne zadania.

//2 Skrypt
//Nieblokujące wywołania: Program kontynuuje wykonywanie innych zadań bez czekania na zakończenie operacji, co zwiększa efektywność, zwłaszcza w operacjach I/O.