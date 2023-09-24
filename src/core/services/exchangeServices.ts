import axios from "axios";

export default class Service {
  url = `http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.API_KEY}`;

  async getCurrencies() {
    try {
      const data = await axios.get(this.url);
      return data;
    } catch (error) {
      return {};
    }
  }
}
