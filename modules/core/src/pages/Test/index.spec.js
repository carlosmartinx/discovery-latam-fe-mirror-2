import React from 'react';
import Enzyme, { mount } from 'enzyme';// eslint-disable-line
import Adapter from 'enzyme-adapter-react-16';
import { initialState } from '../../reducers/demo';
import { Test } from '.';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    testAction: jest.fn(),
    testState: { ...initialState },
  };

  const enzymeWrapper = mount(<Test {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('components', () => {
  describe('Test', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.find('#testContainer')).toBeDefined();

      expect(enzymeWrapper.find('#testHeader')).toBeDefined();
    });
  });
});
