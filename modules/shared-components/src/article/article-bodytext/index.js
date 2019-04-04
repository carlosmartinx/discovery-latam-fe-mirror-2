import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import Root from './styled';

const ArticleBodyData = ({ bodyData }) => (
  <Root>
    {renderHTML(bodyData)}
  </Root>
);

ArticleBodyData.propTypes = {
  bodyData: PropTypes.string.isRequired,
};

export default ArticleBodyData;
