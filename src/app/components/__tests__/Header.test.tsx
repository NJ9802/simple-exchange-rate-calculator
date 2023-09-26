import React from "react";
import { render } from "@testing-library/react";

import Header from "../Header";

it("should render Header correctly", () => {
  const { getByText } = render(<Header />);

  expect(getByText(/Exchange/i)).toBeInTheDocument();
});
