import React from 'react';

import Latest from './index';
import { render, fireEvent, act } from '@testing-library/react';

describe("<Latest />", () => {
  let props = {
    handleClick: jest.fn(),
    data: {
      title: "An mocked title",
      metadata: {
        authorId: "Jeremy Bastard",
        publishedAt: "2132121"
      }
    }
  }

  it("Should render correctly", () => {
    expect(() => {
      render(<Latest {...props} />);
    }).not.toThrow();
  });

  // it("Should handleClick", () => {
  //   const { getByTestId } = render(
  //     <Latest {...props} />
  //   );

  //   act(() => {
  //     fireEvent.click(getByTestId('latest'));
  //   });

  //   expect(props.handleClick).toHaveBeenCalledTimes(1);

  // })
});
