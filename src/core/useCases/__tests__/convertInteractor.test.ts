import { Currency } from "@/core/entities/currency";
import { Calculator } from "../exchangeRateCalculator";

describe("Exchange rate calculator convert currencies correctly", () => {
  const calculator = new Calculator();
  const usd = new Currency("USD", 1.067);
  const aed = new Currency("AED", 3.919);
  const conversion = calculator.convert(aed, usd, 50);

  test("Calculator converts currencies correctly", () => {
    expect(conversion.result).toBeCloseTo(13.613);
  });

  test("Calculator returns exchange rate correctly", () => {
    expect(conversion.exchangeRate).toBeCloseTo(0.272);
  });
});
