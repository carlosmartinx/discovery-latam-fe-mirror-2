/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Header from '.';

const mountWrapper = renderer.create(<Header />);

xdescribe('Header Component', () => {
  it('should render self and subcomponents', () => {
    expect(mountWrapper.toJSON()).toMatchSnapshot();
  });
});
