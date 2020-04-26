import React, { useContext } from 'react';

import { render } from "@testing-library/react";
import { PostsProvider } from '../../store/Posts/index';
import Main from './index';


jest.mock('../../store/Posts/index');

describe("<Main />", () => {

  let props = {
    data: ['text'],
  };


  it("Should render correctly", () => {
    expect(() => {
      render(
        <PostsProvider>
          <Main />
        </PostsProvider>
      );
    }).not.toThrow();
  });
});
