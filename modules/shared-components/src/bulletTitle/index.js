import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Root, Headline, Bullet } from './styled';

const BulletTitle = ({ barcolor, backtheme, titleContent }) => (
  <Root
    alignItems="center"
    mx="auto"
    mt={4}
    mb={4}
  >
    <Bullet
      mr={2}
      barcolor={barcolor}
    />
    <Headline
      fontSize={4}
      themeColor={backtheme}
    >
      { titleContent }
    </Headline>
  </Root>
);

BulletTitle.propTypes = {
  titleContent: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  barcolor: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  backtheme: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

BulletTitle.defaultProps = {
  titleContent: 'Recommended',
  barcolor: 'default',
  backtheme: 'dark',
};

export default BulletTitle;
