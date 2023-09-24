import axios from "axios";

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

jest.mock("axios");

describe("Services works correctly", () => {
  const service = new Service();

  describe("when API call is successful", () => {
    test("should return currencies object", async () => {
      // @ts-ignore
      axios.get.mockResolvedValueOnce(currenciesData);

      // when
      const result = await service.getCurrencies();

      // then
      expect(axios.get).toHaveBeenCalledWith(service.url);
      expect(result).toEqual(currenciesData);
    });
  });

  describe("when API call fails", () => {
    test("should return empty object", async () => {
      // given
      const message = "Network Error";
      // @ts-ignore
      axios.get.mockRejectedValueOnce(new Error(message));

      // when
      const result = await service.getCurrencies();

      // then
      expect(axios.get).toHaveBeenCalledWith(service.url);
      expect(result).toEqual({});
    });
  });
});
