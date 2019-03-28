import React from 'react';
import PropTypes from 'prop-types';
import {
  LinkItem,
  Image,
} from './styled';

const ShareItem = ({
  icon,
  url,
  color,
  background,
  backTheme,
  mobile,
}) => (
  <LinkItem alignItems="center" justifyContent="center" background={background} mobile={mobile} href={url}>
    <Image icon={icon} colorIcon={color} backTheme={backTheme} />
  </LinkItem>
);

ShareItem.propTypes = {
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backTheme: PropTypes.string.isRequired,
  background: PropTypes.func.isRequired,
  mobile: PropTypes.bool,
};

ShareItem.defaultProps = {
  mobile: false,
};

export default ShareItem;
