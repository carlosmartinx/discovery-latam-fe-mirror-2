import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Button, Heading } from 'rebass';
import _ from 'lodash';

// import { act } from 'react-dom/test-utils';
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
const mountWrapper = renderer.create(<Test {...props} />);

describe('components', () => {
  describe('Test', () => {
    it('should render self and subcomponents', () => {
      expect(mountWrapper.toJSON()).toMatchSnapshot();
    });

    xit('should change state text on change', () => {
      // console.log('mountWrapper.root.state', mountWrapper.root);
      const evt = _.set({}, 'target.value', 'test');
      const input = mountWrapper.root.findByType('input');
      // act(() => {
      input.props.onChange(evt);
      // });

      // console.log('evt----', evt.target.value);
      // console.log('input----', input);
      // console.log('input----', input.instance);
      // expect(input.value).toBe(evt.target.value);
    });

    it('should click to Action', () => {
      mountWrapper.root.findByType(Button).props.onClick();
      expect(actionClicked).toBe(true);
    });

    xit('should be empty the default test state text', () => {
      // const heading = mountWrapper.root.findAllByType(Heading);
      // eslint-disable-next-line no-unused-vars
      const heading = mountWrapper.root.find(el => el.type === Heading
        && el.props.color === 'blue'
        && el.props.name === 'headingState');

      // console.log('headings---child', heading.children);
      // console.log('headings---props', heading.find('div'));
      // console.log('headings---json', util.inspect(heading));
      // expect(heading.children).toBe('');
    });
  });
});
