import Service from "@/core/services/exchangeServices";
import ServiceInteractor from "../serviceInteractor";
import { currenciesData } from "@/core/services/__tests__/exchangeServices.test";

global.fetch = jest
  .fn()
  .mockResolvedValueOnce({
    json: () => Promise.resolve(currenciesData),
  })
  .mockRejectedValueOnce(new Error())
  .mockResolvedValueOnce({
    json: () => Promise.resolve(currenciesData),
  })
  .mockRejectedValueOnce(new Error());

describe("Service interactor works correctly", () => {
  const service = new Service();
  const serviceInteractor = new ServiceInteractor(service);
  
  describe("When ServiceInteractor calls service", () => {
    it("should returns an currencies array", async () => {
      const result = await serviceInteractor.getCurrencies();

      expect(fetch).toHaveBeenCalledWith(service.url);

      expect(result.length).toBe(4);
    });
  });

  describe("when API call fails", () => {
    it("should return an empty array", async () => {
      const result = await serviceInteractor.getCurrencies();
      
      expect(fetch).toHaveBeenCalledWith(service.url);

      expect(result.length).toBe(0);
    });
  });
});
