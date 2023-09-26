import React from "react";
import { render, fireEvent } from "@testing-library/react";

import CurrencyDropdown from "../Dropdown";

export const currencies: [string, number][] = [
  ["USD", 1],
  ["EUR", 0.85],
];

it("should render the dropdown correctly", () => {
  const mockSelectCurrency = jest.fn();

  const { getByText } = render(
    <CurrencyDropdown
      label="Select"
      currencies={currencies}
      onSelectCurrency={mockSelectCurrency}
    />
  );

  expect(getByText("Select")).toBeInTheDocument();

  expect(getByText("USD")).toBeInTheDocument();
  expect(getByText("EUR")).toBeInTheDocument();
});

it("should call the onSelectCurrency function when a currency is selected", () => {
  const mockSelectCurrency = jest.fn();

  const { getByText } = render(
    <CurrencyDropdown
      label="Select"
      currencies={currencies}
      onSelectCurrency={mockSelectCurrency}
    />
  );

  // Click the dropdown item
  fireEvent.click(getByText("USD"));

  // Verify onSelectCurrency was called with the correct arguments
  expect(mockSelectCurrency).toHaveBeenCalledWith(["USD", 1]);
});
