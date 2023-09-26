import Service from "../exchangeServices";

export const currenciesData = {
  success: true,
  timestamp: 1695569703,
  base: "EUR",
  date: "2023-09-24",
  rates: {
    AED: 3.919791,
    AFN: 83.866517,
    ALL: 106.432889,
    AMD: 408.634306,
  },
};

global.fetch = jest
  .fn()
  .mockResolvedValueOnce({
    json: () => Promise.resolve(currenciesData),
  })
  .mockRejectedValueOnce(new Error());

describe("Services works correctly", () => {
  const service = new Service();

  describe("when API call is successful", () => {
    it("should return currencies object", async () => {
      const result = await service.getCurrencies();

      expect(fetch).toHaveBeenCalledWith(service.url);
      expect(result).toEqual(currenciesData);
    });
  });

  describe("when API call fails", () => {
    it("should return empty object", async () => {
      const result = await service.getCurrencies();

      expect(fetch).toHaveBeenCalledWith(service.url);
      expect(result).toEqual({});
    });
  });
});
