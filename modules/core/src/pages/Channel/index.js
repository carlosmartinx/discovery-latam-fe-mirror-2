import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Flex,
} from 'rebass';
import {
  BulletTitle,
} from '@discovery-web-app/shared-components';
import Page from '../../components/page';

import getContentAction from '../../actions/content';

export const HomeChannel = (props) => {
  const { appState } = props;
  useEffect(() => {
    props.getContentAction();
  }, []);
  global.console.log(appState.data);
  return (
    <Page id="channel" background="#001534">
      <Flex id="testContainer" flexDirection="column">
        <BulletTitle barcolor="default" backtheme="dark" titleContent="Destacados" />
      </Flex>
    </Page>
  );
};

HomeChannel.propTypes = {
  appState: PropTypes.shape({
    loading: PropTypes.bool,
  }).isRequired,
  getContentAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  appState: state.data,
});

const mapDispatchToProps = {
  getContentAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeChannel);
