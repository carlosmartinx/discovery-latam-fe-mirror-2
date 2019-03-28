import React from 'react';
import PropTypes from 'prop-types';
import ShareItem from './share-item';

import {
  Root,
  Title,
} from './styled';

const Share = ({
  shareList,
  title,
  backTheme,
  mobile,
}) => (
  <Root alignItems="center" mobile={mobile}>
    {title && <Title backTheme={backTheme} mobile={mobile}>{title}</Title>}
    {shareList.map((shareInfo, key) => (
      <ShareItem {...shareInfo} key={shareInfo.id || key} backTheme={backTheme} mobile={mobile} />
    ))}
  </Root>
);

Share.propTypes = {
  mobile: PropTypes.bool,
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

Share.defaultProps = {
  mobile: false,
  title: 'Comparte',
  backTheme: 'dark',
  shareList: {},
};

export default Share;
