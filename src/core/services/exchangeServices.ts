import axios from "axios";

export interface ApiResponse {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: Record<string, number>;
}

export default class Service {
  url = `http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.API_KEY}`;

  async getCurrencies(): Promise<ApiResponse | object> {
    try {
      const data = await axios.get(this.url);
      return data;
    } catch (error) {
      return {};
    }
  }
}
