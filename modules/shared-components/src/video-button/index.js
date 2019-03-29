import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, ButtonPlayer, ButtonIcon } from './styled';

const VideoButton = ({
  href, onClick, className, children,
}) => (
  <ButtonContainer>
    <ButtonPlayer href={href} className={className} onClick={onClick}>
      <ButtonIcon />
      {children}
    </ButtonPlayer>
  </ButtonContainer>
);

VideoButton.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

VideoButton.defaultProps = {
  onClick: () => {},
};

export default VideoButton;
