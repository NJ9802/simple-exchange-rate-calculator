import React from "react";
//@ts-ignore
import renderer from "react-test-renderer";
import { currencies } from "@/app/components/__tests__/Dropdown.test";

import AppController from "../AppController";

test("AppController renders correctly", () => {
  const tree = renderer
    .create(<AppController currencies={currencies} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
