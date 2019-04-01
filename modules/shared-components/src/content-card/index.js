import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'rebass';
import Sponsor from '../sponsor/index';

import {
  Root,
  ImageWrapper,
  HeaderImage,
  Header,
  ContentWrapper,
  HeadlineWrapper,
  Title,
  Description,
  PlayIcon,
  LabelContainer,
  DurationLabel,
  DurationNumber,
  TotalDuration,
  GalleryIcon,
  ChannelLogo,
} from './styled';

const ContentCard = ({
  backtheme,
  background,
  headerSource,
  title,
  sponsor,
  variation,
  description,
  label,
  duration,
  totalTime,
  isFullySponsored,
  channelLogo,
  channelAlt,
  link,
}) => (
  <Root>
    <ImageWrapper>

      {isFullySponsored && sponsor && <Sponsor data={sponsor} variation={variation} />}
      { background === 'gallery' ? (
        <Header>
          <Link href={link}>
            <img alt="hero" src={headerSource} />
            <GalleryIcon />
          </Link>
        </Header>

      ) : '' }
      { background === 'image' ? (
        <Link href={link}>
          <HeaderImage src={headerSource} />
        </Link>

      ) : '' }
      { background === 'video' ? (
        <Header>
          <Link href={link}>
            <img alt="hero" src={headerSource} />
          </Link>
          <PlayIcon m="auto" />
          <LabelContainer>
            <DurationLabel p={1}>{label}</DurationLabel>
            <DurationNumber p={1}>{duration}</DurationNumber>
          </LabelContainer>
          <TotalDuration p={1}>{totalTime}</TotalDuration>
        </Header>
      ) : '' }
    </ImageWrapper>

    <ContentWrapper themeColor={backtheme} isFullySponsored={isFullySponsored}>
      <HeadlineWrapper>
        {channelLogo && <ChannelLogo src={channelLogo} height="30" alt={channelAlt} />}
        {title
        && (
        <Link href={link}>
          <Title>{title}</Title>
        </Link>
        )}
      </HeadlineWrapper>
      {description
        && (
        <Link href={link}>
          <Description isFullySponsored={isFullySponsored}>{description}</Description>
        </Link>
        )
      }
    </ContentWrapper>
  </Root>
);

ContentCard.propTypes = {
  backtheme: PropTypes.string,
  background: PropTypes.string,
  headerSource: PropTypes.string.isRequired,
  label: PropTypes.string,
  duration: PropTypes.string,
  totalTime: PropTypes.string,
  isFullySponsored: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  description: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sponsor: PropTypes.shape({
    name: PropTypes.string,
    circular_logo: PropTypes.string,
    url: PropTypes.string,
  }),
  channelLogo: PropTypes.string,
  channelAlt: PropTypes.string,
  link: PropTypes.string,
  variation: PropTypes.string,
};

ContentCard.defaultProps = {
  title: 'Heading',
  description: 'Description',
  isFullySponsored: false,
  backtheme: 'dark',
  background: 'image',
  label: 'Label',
  duration: '30:30',
  totalTime: '10:10',
  channelAlt: 'channel Logo',
  variation: 'short',
  channelLogo: '',
  sponsor: {},
  link: '#',
};

export default ContentCard;
