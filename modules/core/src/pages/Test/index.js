import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Flex, Text, Box, Heading, Button,
} from 'rebass';
import Page from '../../components/page';
import testAction from '../../actions/test';

export const Test = (props) => {
  const { testState } = props;
  const [text, setText] = useState('');
  return (
    <Page id="testpage" title="Test" description="This is a test page.">
      <Flex id="testContainer" flexDirection="column">
        <Box id="testHeader">
          <Heading color="blue">TEST</Heading>
        </Box>
        <Box id="testContent">
          <Text>Probando</Text>
          <input
            type="test"
            value={text}
            onChange={evt => setText(evt.target.value)}
          />
          <Button onClick={() => props.testAction(text)}>click</Button>
        </Box>
        <Box>
          <Text>Info en el State</Text>
          <Heading name="headingState" color="blue">{testState.test}</Heading>
        </Box>
      </Flex>
    </Page>
  );
};

Test.displayName = 'Test';

Test.propTypes = {
  testState: PropTypes.shape({
    loading: PropTypes.bool,
  }).isRequired,
  testAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  testState: state.test,
});

const mapDispatchToProps = {
  testAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Test);
