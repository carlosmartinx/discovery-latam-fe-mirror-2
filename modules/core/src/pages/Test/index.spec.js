import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import 'jest-styled-components';
import { Button, Heading } from 'rebass';
import _ from 'lodash';

import { Test } from '.';
import { initialState } from '../../reducers/demo';

let actionClicked = false;

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
  actionClicked = false;
});


const props = {
  testAction: () => { actionClicked = true; },
  testState: { ...initialState },
};
const mountWrapper = renderer.create(
  <MemoryRouter initialEntries={['/']} keyLength={0}><Test {...props} /></MemoryRouter>,
);

describe('components', () => {
  describe('Test', () => {
    xit('should render self and subcomponents', () => {
      expect(mountWrapper.toJSON()).toMatchSnapshot();
    });

    xit('should change state text on change', () => {
      const evt = _.set({}, 'target.value', 'test');
      const input = mountWrapper.root.findByType('input');
      input.props.onChange(evt);
    });

    xit('should click to Action', () => {
      mountWrapper.root.findByType(Button).props.onClick();
      expect(actionClicked).toBe(true);
    });

    xit('should be empty the default test state text', () => {
      const heading = mountWrapper.root.find(el => el.type === Heading
        && el.props.color === 'blue'
        && el.props.name === 'headingState');
      expect(heading.children).toBe('');
    });
  });
});
