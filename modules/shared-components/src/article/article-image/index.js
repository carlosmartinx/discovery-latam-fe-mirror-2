import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import Root from './styled';

const ArticleImage = ({ imageData }) => (
  <Root>
    <figure>
      <LazyLoad height={window.width < 768 ? 170 : 570}>
        <img src={imageData.image_url} alt={imageData.image_alt} />
      </LazyLoad>
      <figcaption>{imageData.image_title}</figcaption>
    </figure>
  </Root>
);

ArticleImage.propTypes = {
  imageData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default ArticleImage;
