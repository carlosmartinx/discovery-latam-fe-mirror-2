import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Flex, Box } from 'rebass';

// Components
import { BulletTitle, ProgrammingCountries, ProgrammingCard } from '@discovery-web-app/shared-components';

// Actions
import getProgrammingAction from '../../actions/programming';

// Global Page
import Page from '../../components/page';

const Programming = (props) => {
  const { appState } = props;

  useEffect(() => {
    props.getProgrammingAction('discovery');
  }, []);

  if (!appState.programming.countries) {
    return null;
  }

  const titleContent = 'Programación';

  return (
    <Page id="programmingpage">
      <Flex flexDirection="column">
        <Box width={1 / 2}>
          <BulletTitle barcolor="default" backtheme="dark" titleContent={titleContent} className="bp" />
        </Box>
        <Box width={1 / 2} mt={4} mb={4}>
          <ProgrammingCountries countries={appState.programming.countries} />
        </Box>
        <Box mt={3}>
          {appState.programming.shows.map((show, index) => (
            <ProgrammingCard
              key={show.id || index}
              show={show}
            />
          ))}
        </Box>
      </Flex>
    </Page>
  );
};

Programming.propTypes = {
  appState: PropTypes.shape({
    loading: PropTypes.bool,
  }).isRequired,
  getProgrammingAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  appState: state.programming,
});

const mapDispatchToProps = ({
  getProgrammingAction,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Programming);
