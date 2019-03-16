// Libraries
import { compose } from 'redux';

// Components
import Router from './config/router';
import withThemeProvider from './components/HoC/withThemeProvider';
import withIntl from './components/HoC/withIntl';

export default compose(
  withIntl,
  withThemeProvider,
)(Router);
