import { Currency } from "../entities/currency";

export class Calculator {
  convert(sourceCurrency: Currency, targetCurrency: Currency, amount: number) {
    const result = (amount * targetCurrency.rate) / sourceCurrency.rate;

    const exchangeRate = result / amount;
    return { result, exchangeRate };
  }
}
