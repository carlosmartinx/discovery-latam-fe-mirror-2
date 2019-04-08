import React from 'react';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
// TODO fix issue with dist folder
const Sponsor = () => null;

describe('components', () => {
  describe('Sponsor', () => {
    it('should render self and subcomponents', () => {
      const mountWrapper = renderer.create(
        <IntlProvider>
          <MemoryRouter initialEntries={['/']} keyLength={0}>
            <Sponsor />
          </MemoryRouter>
        </IntlProvider>,
      ).toJSON();
      expect(mountWrapper).toMatchSnapshot();
    });
  });
});
