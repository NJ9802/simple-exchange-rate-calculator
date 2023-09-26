export default class CurrencyDTO {
  id: string;
  rate: number;
  constructor(id: string, rate: number) {
    this.id = id;
    this.rate = rate;
  }
}
