import React from 'react';
import PropTypes from 'prop-types';
import {
  Root, Card, LinkWrapper, ImgLogo,
} from './styled';

export const ChannelList = ({
  channels,
  py,
}) => (
  <Root flexDirection="row" py={py}>
    {channels.map(channel => (
      <Card p={[1, 2]} key={channel.title}>
        <LinkWrapper href={channel.url} title={channel.title} channels={channels} target="_blank">
          <ImgLogo src={channel.logo} title={channel.title} mx="auto" />
        </LinkWrapper>
      </Card>
    ))}
  </Root>
);

ChannelList.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    shortname: PropTypes.string.isRequired,
  })).isRequired,
  py: PropTypes.number,
};

ChannelList.defaultProps = {
  py: 0,
};

export default ChannelList;
