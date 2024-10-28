class Currency {
    constructor(exchangeRates) {
        this.exchangeRates = exchangeRates;
    }

    roundTwoDecimals(amount) {
        return Math.round(amount * 100) / 100;
    }

    convertToPLN(amount, currency) {
        if (!this.exchangeRates[currency]) {
            throw new Error(`Nieznana waluta: ${currency}`);
        }
        return this.roundTwoDecimals(amount * this.exchangeRates[currency]);
    }
}

module.exports = Currency;