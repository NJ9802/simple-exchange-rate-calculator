import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AppController from "../AppController";
import { currencies } from "@/app/components/__tests__/Dropdown.test";

test("it should render the app controller correctly and handle user interactions", () => {
  const { getByText, getAllByText, getByPlaceholderText } = render(
    <AppController currencies={currencies} />
  );

  const calculateButton = getByText("CALCULATE");
  const resultAmountLabel = screen.getByTestId("resultAmountLabel");
  const exchangeRateLabel = screen.getByTestId("exchangeRateLabel");

  // Verify initial state
  expect(getByText("FROM")).toBeInTheDocument();
  expect(getByText("TO")).toBeInTheDocument();
  expect(resultAmountLabel).toBeInTheDocument();
  expect(exchangeRateLabel).toBeInTheDocument();

  expect(resultAmountLabel.innerHTML).toBe("-");
  expect(exchangeRateLabel.innerHTML).toBe("Exchange rate: -");

  expect(calculateButton).toBeDisabled();

  const [sourceDropdownLabel, targetDropdownLabel] = getAllByText("Select");

  // Select source currency
  const sourceCurrency = getAllByText("USD")[0];
  expect(sourceDropdownLabel.innerHTML).toBe("Select");
  fireEvent.click(sourceCurrency);
  expect(sourceDropdownLabel.innerHTML).toBe("USD");

  // Select target currency
  const targetCurrency = getAllByText("EUR")[1];

  expect(targetDropdownLabel.innerHTML).toBe("Select");
  fireEvent.click(targetCurrency);
  expect(targetDropdownLabel.innerHTML).toBe("EUR");

  // Enter amount
  fireEvent.change(getByPlaceholderText("Amount"), {
    target: { value: "100" },
  });
  // @ts-ignore
  expect(getByPlaceholderText("Amount").value).toBe("100");

  // Verify calculate button is enabled
  expect(calculateButton).toBeEnabled();

  // Verify resultAmount and exchangeRate are correctly
  fireEvent.click(calculateButton);
  expect(resultAmountLabel.innerHTML).toBe("85");
  expect(exchangeRateLabel.innerHTML).toBe("Exchange rate: 0.85");
});
