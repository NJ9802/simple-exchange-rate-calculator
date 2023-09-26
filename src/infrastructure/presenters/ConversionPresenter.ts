export default function conversionPresenter({
  result,
  exchangeRate,
}: {
  result: number;
  exchangeRate: number;
}) {
  const decimals = 10 ** 5;

  const processedResult = Math.round(result * decimals) / decimals;
  const processedExchangeRate = Math.round(exchangeRate * decimals) / decimals;
  result = processedResult;
  exchangeRate = processedExchangeRate;

  return { result, exchangeRate };
}
