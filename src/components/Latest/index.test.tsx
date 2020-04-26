import React from 'react';

import Latest from './index';
import { render, fireEvent, act } from '@testing-library/react';

describe("<Latest />", () => {
  let props = {
    data: {
      title: "An mocked title",
      metadata: {
        authorId: "Jeremy Bastard",
        publishedAt: "2132121"
      }
    }
  }


  let funcs: any;
  beforeEach(() => {
    funcs = {
      handleClick: jest.fn()
    }
  });

  it("Should render correctly", () => {
    expect(() => {
      render(<Latest {...props} />);
    }).not.toThrow();
  });
});
