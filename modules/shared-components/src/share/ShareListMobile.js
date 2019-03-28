import React from 'react';
import PropTypes from 'prop-types';
import ShareItem from './ShareItem';

import {
  Root,
  Title,
} from './styled';

const ShareListMobile = ({
  shareList,
  title,
  backTheme,
}) => (
  <Root alignItems="center" mobile>
    {title && <Title backTheme={backTheme} mobile>{title}</Title>}
    {shareList.map((shareInfo, key) => (
      <ShareItem {...shareInfo} key={shareInfo.id || key} mobile />
    ))}
  </Root>
);

ShareListMobile.propTypes = {
  title: PropTypes.string,
  backTheme: PropTypes.string,
  shareList: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    background: PropTypes.func.isRequired,
  })),
};

ShareListMobile.defaultProps = {
  title: 'Comparte',
  backTheme: 'dark',
  shareList: {},
};

export default ShareListMobile;
