import React from 'react';
import PropTypes from 'prop-types';
import ShareItem from './ShareItem';

import {
  Root,
  Title,
} from './styled';

const ShareList = ({
  shareList,
  title,
  backTheme,
}) => (
  <Root alignItems="center">
    {title && <Title backTheme={backTheme}>{title}</Title>}
    {shareList.map((shareInfo, key) => (
      <ShareItem {...shareInfo} backTheme={backTheme} key={shareInfo.id || key} />
    ))}
  </Root>
);

ShareList.propTypes = {
  title: PropTypes.string,
  backTheme: PropTypes.string,
  shareList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    background: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  })),
};

ShareList.defaultProps = {
  title: 'Comparte',
  backTheme: 'dark',
  shareList: {},
};

export default ShareList;
