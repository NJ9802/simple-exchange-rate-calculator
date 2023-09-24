import Service from "../services/exchangeServices";

export default class ServiceInteractor {
  private service: Service;

  constructor(service: Service) {
    this.service = service;
  }

  async getCurrencies() {
    const data = await this.service.getCurrencies();

    if (!("rates" in data)) {
      return [];
    }

    return Object.entries(data.rates);
  }
}
