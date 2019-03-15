/* eslint-disable */
import React from 'react';
import { mount } from 'enzyme';
import Button2 from '.';

describe('Button2 Component', () => {
  it('renders without props', () => {
    const wrapper = mount(<Button2 />);
    const button = wrapper.find('.button');
    expect(button.length).toBe(1);
  });

  it('renders without props', () => {
    const wrapper = mount(<Button2 />);
    const button = wrapper.find('.button');
    expect(button.length).toBe(1);
  });

  it('renders children when passed in', () => {
    const wrapper = mount(
      <Button2>
        <p className="child">Some Child</p>
      </Button2>,
    );

    const child = wrapper.find('.child');
    expect(child.length).toBe(1);
  });

  it('handles onClick events', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Button2 onClick={onClick} />);

    wrapper.find('button').simulate('click');

    expect(onClick.mock.calls.length).toBe(1);
  });
});
