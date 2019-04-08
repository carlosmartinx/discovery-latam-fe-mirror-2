import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Box } from 'rebass';

// Actions
import getSponsorAction from '../../actions/sponsor';

// Global Page
import Page from '../../components/page';

const Sponsor = (props) => {
  const { appState, match } = props;
  useEffect(() => {
    props.getSponsorAction(match.url);
  }, []);
  global.console.log(appState.sponsor);
  return (
    <Page id="sponsor" background="#000f24">
      <Box>
          Sponsor
      </Box>
    </Page>
  );
};

Sponsor.propTypes = {
  appState: PropTypes.shape({
    loading: PropTypes.bool,
  }).isRequired,
  getSponsorAction: PropTypes.func.isRequired,
  match: PropTypes.string.isRequired,
};


const mapStateToProps = state => ({
  appState: state.sponsor,
});

const mapDispatchToProps = ({
  getSponsorAction,
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sponsor);
