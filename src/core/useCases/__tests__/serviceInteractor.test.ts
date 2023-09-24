import Service from "@/core/services/exchangeServices";
import ServiceInteractor from "../serviceInteractor";
import axios from "axios";
import { currenciesData } from "@/core/services/__tests__/exchangeServices.test";

jest.mock("axios");

describe("When ServiceInteractor calls service", () => {
  const service = new Service();
  const serviceInteractor = new ServiceInteractor(service);

  test("should returns an currencies array", async () => {
    // @ts-ignore
    axios.get.mockResolvedValueOnce(currenciesData);

    const result = await serviceInteractor.getCurrencies();

    expect(result.length).toBe(4);
  });

  test("if fail, should return an empty array", async () => {
    // @ts-ignore
    axios.get.mockResolvedValueOnce(new Error());

    const result = await serviceInteractor.getCurrencies();

    expect(result.length).toBe(0);
  });
});
