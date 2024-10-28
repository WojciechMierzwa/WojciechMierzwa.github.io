const exchangeRates = {
    USD: 4.02,
    EUR: 4.35,
    GBP: 5.21,
    CHF: 4.64,
    INR: 0.048
};

function roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
}

exports.convertToPLN = function(amount, currency) {
    if (!exchangeRates[currency]) {
        throw new Error(`Nieznana waluta: ${currency}`);
    }
    return roundTwoDecimals(amount * exchangeRates[currency]);
};