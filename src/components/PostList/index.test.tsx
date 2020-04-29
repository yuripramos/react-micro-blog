import React, { useContext } from 'react';

import { render, cleanup } from "@testing-library/react";
import { AuthorsProvider } from '../../store/Authors/index';
import PostList from './index';


afterEach(cleanup);

describe("<Post />", () => {

  const props = {
    data: [
      {
        title: "One Title",
        body: "body body body",
        metadata: {
          publishedAt: 1516184567000,
          authorId: 4
        }
      },
      {
        title: "Second Title",
        body: "bodysss",
        metadata: {
          publishedAt: 151611267000,
          authorId: 4
        }
      },
      {
        title: "Third Title",
        body: "Executar",
        metadata: {
          publishedAt: 129378782000,
          authorId: 4
        }
      },
    ]
  }

  it("Should render correctly", () => {
    expect(() => {
      render(
        <AuthorsProvider children={<PostList {...props} />} />
      );
    }).not.toThrow();
  });
});
