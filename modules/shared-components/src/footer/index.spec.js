/* eslint-disable */
import React from 'react';
import { mount } from 'enzyme';
import Footer from '.';

describe('Footer Component', () => {
  it('renders without props', () => {
    const wrapper = mount(<Footer />);
    const footer = wrapper.find('.footer');
    expect(footer.length).toBe(1);
  });
});
