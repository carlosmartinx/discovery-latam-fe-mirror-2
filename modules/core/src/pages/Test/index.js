/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Flex, Text, Box, Heading, Button } from 'rebass';
import testAction from '../../actions/test';

export const Test = props => { // the export is needed for tests
  const [text, setText] = useState('');
  return (
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
        <Heading name="headingState" color="blue">{props.testState.test}</Heading>
      </Box>
    </Flex>
  );
};

Test.displayName = 'Test';

Test.propTypes = {
  testState: PropTypes.object,
  testAction: PropTypes.func
};

const mapStateToProps = state => ({
  testState: state.test
});

const mapDispatchToProps = {
  testAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);
