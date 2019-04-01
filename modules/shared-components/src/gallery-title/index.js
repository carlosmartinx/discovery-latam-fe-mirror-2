import React from 'react';
import PropTypes from 'prop-types';
import { Root, Headline, Description } from './styled';

const GalleryTitle = ({ backtheme, title, description }) => (
  <Root
    alignItems="center"
    mx="auto"
    mt={4}
    mb={4}
  >
    <Headline
      fontSize={['7', '8']}
      themeColor={backtheme}
    >
      { title }
    </Headline>
    <Description
      fontSize={2}
      themeColor={backtheme}
    >
      {description}
    </Description>
  </Root>
);

GalleryTitle.propTypes = {
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  description: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  backtheme: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

GalleryTitle.defaultProps = {
  title: 'Headline',
  backtheme: 'dark',
};

export default GalleryTitle;
