import React, { useContext } from 'react';

import { render, cleanup } from "@testing-library/react";
import { AuthorsProvider } from '../../store/Authors/index';
import Post from './index';


afterEach(cleanup);

describe("<Post />", () => {

  const props = {
    data: {
      title: "One Title",
      body: "body body body",
      metadata: {
        authorId: "21312",
        publishedAt: "10-04-19 12:00:17"
      }
    },
    id: "2421"
  }

  it("Should render correctly", () => {
    expect(() => {
      render(
        <AuthorsProvider children={<Post {...props} />} />
      );
    }).not.toThrow();
  });
});
