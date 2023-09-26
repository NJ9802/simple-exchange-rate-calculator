"use client";

import React, { useState } from "react";
import styled from "styled-components";

import CurrencyDTO from "@/DTOs/currencyDTO";
import CurrencyMapper from "@/DTOs/currencyMapper";
import Button from "@/app/components/Button";
import Dropdown from "@/app/components/Dropdown";
import Header from "@/app/components/Header";
import { Calculator } from "@/core/useCases/exchangeRateCalculator";

import conversionPresenter from "../presenters/ConversionPresenter";

interface AppControllerProps {
  currencies: [string, number][];
}

const AppController: React.FC<AppControllerProps> = ({ currencies }) => {
  const [sourceCurrency, setSourceCurrency] = useState<CurrencyDTO | null>();
  const [targetCurrency, setTargetCurrency] = useState<CurrencyDTO | null>();
  const [amount, setAmount] = useState(0);
  const [conversionResult, setConversionResult] = useState<
    { result: number; exchangeRate: number } | undefined
  >();

  const handleClick = () => {
    if (sourceCurrency && targetCurrency && amount) {
      const exchangeRateCalculator = new Calculator();
      const result = exchangeRateCalculator.convert(
        CurrencyMapper.mapToDomainEntity(sourceCurrency),
        CurrencyMapper.mapToDomainEntity(targetCurrency),
        amount
      );
      setConversionResult(conversionPresenter(result));
    }
  };

  const createCurrencyDTO = (currency: [string, number]) =>
    new CurrencyDTO(currency[0], currency[1]);

  const handleSelectSourceCurrency = (currency: [string, number]) => {
    setSourceCurrency(createCurrencyDTO(currency));
  };

  const handleSelectTargetCurrency = (currency: [string, number]) => {
    setTargetCurrency(createCurrencyDTO(currency));
  };

  return (
    <>
      <Header />
      <CalculatorContainer>
        <ConversionRow>
          <CurrencyContainer>
            <label>FROM</label>

            <Dropdown
              label={sourceCurrency ? sourceCurrency.id : undefined}
              currencies={currencies}
              onSelectCurrency={handleSelectSourceCurrency}
            />
            <Input
              placeholder="Amount"
              type="number"
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </CurrencyContainer>

          <ReverseButton
            disabled={!sourceCurrency || !targetCurrency}
            onClick={() => {
              setSourceCurrency(targetCurrency);
              setTargetCurrency(sourceCurrency);
              setConversionResult(undefined);
            }}
          >
            <span className="material-symbols-outlined">sync_alt</span>
          </ReverseButton>

          <CurrencyContainer>
            <label>TO</label>

            <Dropdown
              label={targetCurrency ? targetCurrency.id : undefined}
              currencies={currencies}
              onSelectCurrency={handleSelectTargetCurrency}
            />
            <ResultLabel data-testid="resultAmountLabel">
              {conversionResult?.result || "-"}
            </ResultLabel>
          </CurrencyContainer>
        </ConversionRow>

        <ExchangeLabel data-testid="exchangeRateLabel">
          Exchange rate: {conversionResult?.exchangeRate || "-"}
        </ExchangeLabel>

        <ConvertButton
          disabled={!sourceCurrency || !targetCurrency || !amount}
          onClick={handleClick}
        >
          CALCULATE
        </ConvertButton>
      </CalculatorContainer>
    </>
  );
};

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 21.8rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);
  padding: 1.25rem 1rem;
  margin: 5rem auto;
  border-radius: 0.5rem;
`;

const ConversionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

const CurrencyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  width: fit-content;
`;

const Input = styled.input`
  width: 3.75rem;
  border: 1px solid #aadae4;
  border-radius: 0.25rem;
  padding: 0.75rem;
  transition: 180ms box-shadow ease-in-out, border-color 180ms ease-in-out;

  &:focus {
    outline: none;
    border-color: var(--blue);
    box-shadow: 0 0 0 3px #2783fb1c;
  }
`;

const ReverseButton = styled(Button)`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
`;

const ResultLabel = styled.label`
  display: flex;
  align-items: center;
  height: 37px;
  font-weight: 600;
`;

const ExchangeLabel = styled(ResultLabel)`
  margin-top: 2rem;
`;

const ConvertButton = styled(Button)`
  border-radius: 0.4rem;
  margin-top: 3rem;
  width: 100%;
  padding: 0.8rem 0;
  font-weight: 800;
`;
export default AppController;
