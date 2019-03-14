import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme'; // eslint-disable-line
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Home from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('components', () => {
  describe('Home', () => {
    it('should render self and subcomponents', () => {
      const mountWrapper = renderer.create(<MemoryRouter initialEntries={['/']} keyLength={0}><Home /></MemoryRouter>).toJSON();
      expect(mountWrapper).toMatchSnapshot();
    });
  });
});
