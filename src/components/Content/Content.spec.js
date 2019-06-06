import React from "react";
import { shallow } from "enzyme";
import Content from "./Content";

const props = {
  getAuthors: jest.fn(),
  getArticles: jest.fn()
};
describe("Content", () => {
  it("should match snapshot", () => {
    expect(shallow(<Content {...props} />)).toMatchSnapshot();
  });
});
