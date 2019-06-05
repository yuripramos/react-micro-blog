import React from "react";
import { mount } from "enzyme";
import ContentFilters from "./ContentFilters";

const props = {
  onFilter: jest.fn(),
  defaultFilter: {
    type: "history",
    range: 15
  }
};

describe("Dashboard Filters component", () => {
  it("should match snapshot", () => {
    expect(mount(<ContentFilters {...props} />)).toMatchSnapshot();
  });
});
