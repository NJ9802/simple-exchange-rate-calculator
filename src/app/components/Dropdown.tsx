"use client";

import React, { useState } from "react";
import styled from "styled-components";

interface CurrencyDropdownProps {
  label?: string;
  currencies: [string, number][];
  onSelectCurrency: (currency: [string, number]) => void;
}

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 0 0.75rem;
  border: 1px solid var(--gray-1);
  border-radius: 0.25rem;
`;

const DropdownLabel = styled.label`
  font-weight: bold;
  padding: 0 0.75rem 0 0;
  width: 2.5rem;
  text-align: center;
`;

const DropdownButton = styled.button`
  border: none;
  background-color: var(--gray-1);
  color: var(--gray-3);
  cursor: pointer;
  transition: 300ms;

  &:hover {
    background-color: var(--gray-4);
  }
`;

const DropdownContent = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "block" : "none")};
  position: absolute;
  background-color: var(--gray-2);
  max-height: 12.5rem;
  overflow: auto;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    background-color: var(--gray-1);
  }
`;

const CurrencyDropdown: React.FC<CurrencyDropdownProps> = ({
  label = "Select",
  currencies,
  onSelectCurrency,
}) => {
  const [open, setOpen] = useState(false);

  const handleDropdownClick = () => {
    setOpen(!open);
  };

  if (!currencies) return;

  return (
    <DropdownContainer>
      <DropdownButtonWrapper>
        <DropdownLabel data-testid="currencyLabel">{label}</DropdownLabel>
        <DropdownButton onClick={handleDropdownClick}>
          {open ? (
            <span className="material-symbols-outlined">arrow_drop_down</span>
          ) : (
            <span className="material-symbols-outlined">arrow_right</span>
          )}
        </DropdownButton>
      </DropdownButtonWrapper>
      <DropdownContent open={open}>
        {currencies.map((currency) => (
          <DropdownItem
            key={currency[0]}
            onClick={() => {
              onSelectCurrency(currency);
              setOpen(false);
            }}
          >
            {currency[0]}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default CurrencyDropdown;
