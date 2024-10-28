/*const currency1 = require('./currency1');

const Currency = require('./currency2');
const exchangeRates = {
    USD: 4.02,
    EUR: 4.35,
    GBP: 5.21,
    CHF: 4.64,
    INR: 0.048
};
const currency2 = new Currency(exchangeRates);

const testAmounts = [50, 100, 250, 500];
const testCurrencies = ['USD', 'EUR', 'GBP', 'CHF', 'INR'];

//currency1.js
console.log('Currency1.js (export):');
testAmounts.forEach(amount => {
    testCurrencies.forEach(currency => {
        try {
            const result = currency1.convertToPLN(amount, currency);
            console.log(`${amount} ${currency} po wymianie to PLN: ${result}`);
        } catch (error) {
            console.error(error.message);
        }
    });
});

//currency2.js
console.log('\nCurrency2.js (class):');
testAmounts.forEach(amount => {
    testCurrencies.forEach(currency => {
        try {
            const result = currency2.convertToPLN(amount, currency);
            console.log(`${amount} ${currency} po wymianie to PLN: ${result}`);
        } catch (error) {
            console.error(error.message);
        }
    });
});*/

//zad2
// user_interface.js

const readline = require('readline');
const math1 = require('./myMathModule1'); 
const MyMathModule = require('./myMathModule2');  
const math2 = new MyMathModule(); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function wykonajObliczenie(modul, operacja, a, b) {
    switch (operacja) {
        case '1':
            return modul.add(a, b);
        case '2':
            return modul.subtract(a, b);
        case '3':
            return modul.multiply(a, b);
        case '4':
            return modul.divide(a, b);
        case '5':
            return modul.power(a, b);
        default:
            throw new Error("Nieznana operacja");
    }
}

rl.question('Wybierz moduł (1 dla myMathModule1 (export), 2 dla myMathModule2 (class )): ', (wyborModulu) => {
    const wybranyModul = wyborModulu === '1' ? math1 : math2;
    const nazwaModulu = wyborModulu === '1' ? 'myMathModule1' : 'myMathModule2';

    rl.question('Podaj pierwszą liczbę: ', (pierwszaLiczba) => {
        const a = parseFloat(pierwszaLiczba);
        rl.question('Podaj drugą liczbę: ', (drugaLiczba) => {
            const b = parseFloat(drugaLiczba);

            rl.question('Wybierz operację (dodaj (1), odejmij(2), pomnóż(3), podziel(4), potęga(5)): ', (operacja) => {
                try {
                    const wynik = wykonajObliczenie(wybranyModul, operacja, a, b);
                    console.log(`\nWynik operacji ${operacja} (${a}, ${b}) za pomocą ${nazwaModulu} = ${wynik}`);
                } catch (error) {
                    console.error(error.message);
                } finally {
                    rl.close();
                }
            });
        });
    });
});
