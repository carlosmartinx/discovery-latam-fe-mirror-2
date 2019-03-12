/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Flex, Text, Box, Heading, Button } from 'rebass';
import testAction from '../../actions/test';

const Test = props => {
  const [text, setText] = useState('');
  return (
    <Flex flexDirection="column">
      <Box>
        <Heading color="blue">TEST</Heading>
      </Box>
      <Box>
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
        <Heading color="blue">{props.testState.test}</Heading>
      </Box>
    </Flex>
  );
};

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
