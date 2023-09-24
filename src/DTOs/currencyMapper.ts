import { Currency } from "@/core/entities/currency";
import CurrencyDTO from "./currencyDTO";

export default class CurrencyMapper {
  static mapToDomainEntity(currencyDTO: CurrencyDTO) {
    return new Currency(currencyDTO.id, currencyDTO.rate);
  }
}
