import React from 'react';
import { render } from "@testing-library/react";

import Store from "./index";

describe("Store", () => {

  const props = {
    div: <div> test </div>
  }
  it("render store", () => {
    expect(() => {
      render(<Store children={props} />);
    }).not.toThrow();
  });
});



