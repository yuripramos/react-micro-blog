import React from 'react';
import { mount } from 'enzyme';
import Latest from './index';
import { render } from '@testing-library/react';

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

  it("Should call handleClick() function on click", () => {
    // const { getByTestId } = render(<Latest {...props} />);

    // act(() => {
    //   fireEvent.click(getByTestId('latest'));
    // });

    // expect(funcs.handleClick).toHaveBeenCalledTimes(1);

    const spy = jest.spyOn(Latest.prototype, 'handleClick');
    const wrapper = mount(<Latest />);

    wrapper.find('#latest').simulate('click', { target: { id: 'latest' } });

    expect(spy).toHaveBeenCalled();
    spy.mockClear();//clearing the mock functions


    // expect(getByTestId("latest")).toHaveTextContent(props.data.title);
  });
});
