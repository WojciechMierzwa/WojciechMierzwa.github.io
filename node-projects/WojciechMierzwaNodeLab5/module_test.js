const currency1 = require('./currency1');

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
});
