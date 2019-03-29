import { withRouter } from 'react-router';
// Libraries
import { compose } from 'redux';

// Components
import Router from './config/router';
import withThemeProvider from './components/hoc/withThemeProvider';
import withIntl from './components/hoc/withIntl';

export default withRouter(compose(
  withIntl,
  withThemeProvider,
)(Router));
