import conversionPresenter from "../ConversionPresenter";

test("Conversion presenter works correctly", () => {
  const decimals = 10 ** 5;

  const mockResult = {
    result: 134.5849862074304,
    exchangeRate: 1.345849862074304,
  };

  const result = conversionPresenter(mockResult);

  expect(result.result).toBeCloseTo(
    Math.round(mockResult.result * decimals) / decimals,
    3
  );

  expect(result.exchangeRate).toBeCloseTo(
    Math.round(mockResult.exchangeRate * decimals) / decimals,
    3
  );
});
