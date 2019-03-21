/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import {
  Root, Card, LinkWrapper, ImgLogo, Content,
} from './styled';

const SliderItem = ({
  sliders, sponsor, channel, description, title, url,
}) => (
  <Root flexDirection="column">
    <Card p={[1, 2, 3, 4]} width={1} alignItems="left">
      {sponsor.map(spon => (
        <LinkWrapper
          href={spon.url}
          target="_blank"
        >
          <ImgLogo src={spon.logo_svg} mx="auto" />
        </LinkWrapper>
      ))}
    </Card>
    <Card p={[1, 2, 3, 4]} width={1}>
      <LinkWrapper href={channel.url} title={channel.name} sliders={sliders}>
        <ImgLogo src={channel.logo_svg} title="Discovery" mx="auto" target="_blank" />
      </LinkWrapper>
    </Card>
    <Card p={[1, 2, 3, 4]} width={1} alignItems="left">
      <LinkWrapper href={url} sliders={sliders}>
        <Content width={[1, 1, 10 / 12]}>
          {title}
        </Content>
      </LinkWrapper>
      <Content width={[1, 1, 10 / 12]}>
        {description}
      </Content>
    </Card>
  </Root>
);

SliderItem.propTypes = {
  sliders: PropTypes.arrayOf(PropTypes.shape({
    sponsor: PropTypes.arrayOf(PropTypes.shape({
      logo_svg: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })).isRequired,
    channel: PropTypes.shape({
      logo_svg: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    preview_image: PropTypes.shape({
      image_1_1: PropTypes.string,
      image_alt: PropTypes.string,
      image_file: PropTypes.string,
      image_url: PropTypes.string,
    }).isRequired,
    region: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

SliderItem.defaultProps = {
  description: '',
  title: '',
  url: '/',
};

export default SliderItem;
