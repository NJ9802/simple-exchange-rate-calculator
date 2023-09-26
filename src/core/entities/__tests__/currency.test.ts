import { Currency } from "../currency";

test("Currency entity holds id and rate correctly", () => {
  const currency = new Currency("USD", 1.067);

  expect(currency.id).toBe("USD");

  expect(currency.rate).toBe(1.067);
});
