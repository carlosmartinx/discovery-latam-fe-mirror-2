// Libraries
import { compose } from 'redux';

// Components
import Router from './config/router';
import withThemeProvider from './components/HoC/withThemeProvider';

export default compose(
  withThemeProvider,
)(Router);
