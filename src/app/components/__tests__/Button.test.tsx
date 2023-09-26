import React from "react";
import { render } from "@testing-library/react";

import Button from "../Button";

it("should render Button correctly", () => {
  const { getByText } = render(<Button>Test</Button>);

  expect(getByText("Test")).toBeInTheDocument();
});
