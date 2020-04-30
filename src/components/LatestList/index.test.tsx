import React from 'react';

import { render } from '@testing-library/react';

import LatestList from "./index";


describe("<LatestList /> ", () => {

  let props = {
    data: [{
      title: "An mocked title",
      metadata: {
        authorId: "Jeremy Bastard",
        publishedAt: "2132121"
      }
    },
    {
      title: "An mocked title",
      metadata: {
        authorId: "Jeremy Bastard",
        publishedAt: "2132121"
      }
    },
    {
      title: "An mocked title",
      metadata: {
        authorId: "Jeremy Bastard",
        publishedAt: "2132121"
      }
    }]
  };

  it("Should render correctly", () => {
    expect(() => {
      render(<LatestList {...props} />);
    }).not.toThrow();
  });
})
