import React from 'react';
import PropTypes from 'prop-types';
import { Root, Headline, Bullet } from './styled';

const BulletTitle = ({
  className, barcolor, backtheme, titleContent,
}) => (
  <Root
    alignItems="center"
    mx="auto"
    mt={4}
    mb={4}
  >
    <Bullet
      mr={2}
      barcolor={barcolor}
      className={className}
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
  className: PropTypes.string.isRequired,
};

BulletTitle.defaultProps = {
  titleContent: 'Recommended',
  barcolor: 'default',
  backtheme: 'dark',
};

export default BulletTitle;
