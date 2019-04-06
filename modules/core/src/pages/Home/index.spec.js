import React from 'react';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
// TODO fix issue with dist folder
const Home = () => null;

describe('components', () => {
  describe('Home', () => {
    it('should render self and subcomponents', () => {
      const mountWrapper = renderer.create(
        <IntlProvider>
          <MemoryRouter initialEntries={['/']} keyLength={0}>
            <Home />
          </MemoryRouter>
        </IntlProvider>,
      ).toJSON();
      expect(mountWrapper).toMatchSnapshot();
    });
  });
});
