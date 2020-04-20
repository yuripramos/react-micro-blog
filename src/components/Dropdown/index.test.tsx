import React from 'react';

import { render, cleanup, fireEvent, act } from '@testing-library/react';
import Dropdown from '../Dropdown/index';


describe("Dropdown component", () => {

  afterEach(cleanup);
  const props = {
    id: 'id-01',
    data: ["author1 ", "author2", "author3"],
    placeholder: 'Select',
    multiple: false,
    dataLabel: "label",
    disabled: false,
    onChange: jest.fn(),
    className: 'activated'
  }

  it("After click check it classname changes", () => {
    const { getByTestId } = render(
      <Dropdown {...props} />
    );

    act(() => {
      fireEvent.click(getByTestId('dropdown'));
    });

    expect(getByTestId('dropdown')).toBeDefined();
  });
})
