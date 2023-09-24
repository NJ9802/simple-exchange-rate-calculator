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
      const response = await axios.get(this.url);
      return response.data;
    } catch (error) {
      return {};
    }
  }
}
