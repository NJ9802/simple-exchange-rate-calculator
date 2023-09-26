export class Currency {
  id: string;
  rate: number;

  constructor(id: string, rate: number) {
    this.id = id;
    this.rate = rate;
  }
}
