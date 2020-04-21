import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { AuthorsProvider } from "./index";


describe("Authors store", () => {
  afterEach(cleanup);

  const children = () => <div>{'children'}</div>;
  it("render Authors Provider correctly", () => {
    expect(() => {
      render(<AuthorsProvider children={children} />);
    }).not.toThrow();
  });
});
