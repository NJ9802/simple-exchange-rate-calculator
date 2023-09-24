import { Currency } from "@/core/entities/currency";
import CurrencyDTO from "../currencyDTO";
import CurrencyMapper from "../currencyMapper";

describe("Currency Mapper works correctly", () => {
  const currencyDTO = new CurrencyDTO("USD", 1.067);
  const currencyMapped = CurrencyMapper.mapToDomainEntity(currencyDTO);
  const originalCurrency = new Currency("USD", 1.067);

  test("Currency Mapper returns an Currency object", () => {
    expect(typeof currencyMapped).toBe(typeof originalCurrency);
  });

  test("Currency Mapper maps currency fields correctly", () => {
    expect(currencyMapped.id).toBe(originalCurrency.id);
    expect(currencyMapped.rate).toBe(originalCurrency.rate);
  });
});
