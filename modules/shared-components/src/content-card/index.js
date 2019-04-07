import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'rebass';
import ReactSVG from 'react-svg';
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
  ChannelSVG,
} from './styled';

const ContentCard = ({
  card, variationSponsor, backtheme,
}) => (
  <Root>
    { card.sponsor ? <Sponsor data={card.sponsor} variation={variationSponsor} /> : '' }
    <ImageWrapper>
      { card.type === 'image_gallery' ? (
        <Header>
          <Link href={card.url}>
            <img alt={card.preview_image.image_alt} src={card.preview_image.image_url} />
            <GalleryIcon />
          </Link>
        </Header>

      ) : '' }
      { card.type === 'image'
      || card.type === 'article'
      || card.type === 'programa'
      || card.type === 'external_content'
      || card.type === 'show'
      || card.type === 'galeria_de_imagenes' ? (
        <Link href={card.url}>
          <HeaderImage src={card.preview_image.image_url} alt={card.preview_image.image_alt} />
        </Link>

        ) : '' }
      { card.type === 'video' ? (
        <Header>
          <Link href={card.url}>
            <img alt={card.preview_image.image_alt} src={card.preview_image.image_url} />
          </Link>
          <PlayIcon m="auto" />
          {card.season
            ? (
              card.duration && (
                <LabelContainer>
                  <DurationLabel p={1}>{card.season}</DurationLabel>
                  <DurationNumber p={1}>
                    {card.duration.minutes}
                    :
                    {card.duration.seconds}
                  </DurationNumber>
                </LabelContainer>
              )
            )
            : (
              card.duration && (
              <TotalDuration p={1}>
                {card.duration.minutes}
                    :
                {card.duration.seconds}
              </TotalDuration>
              )
            )
            }
        </Header>
      ) : '' }
    </ImageWrapper>

    <ContentWrapper sponsor={!!card.sponsor}>
      <HeadlineWrapper>
        {card.channel
        && <ChannelSVG backtheme={backtheme}><ReactSVG src={card.channel.logo_svg} /></ChannelSVG>}
        {card.title
          && (
          <Link href={card.url}>
            <Title backtheme={backtheme}>{card.title}</Title>
          </Link>
          )}
      </HeadlineWrapper>
      {card.description
          && (
          <Link href={card.url}>
            <Description backtheme={backtheme} sponsor={!!card.sponsor}>
              {card.description}
            </Description>
          </Link>
          )
        }
    </ContentWrapper>
  </Root>
);

ContentCard.propTypes = {
  card: PropTypes.shape({
    type: PropTypes.string,
    preview_image: PropTypes.shape({
      image_url: PropTypes.string.isRequired,
    }),
    season: PropTypes.string,
    duration: PropTypes.shape({
      minutes: PropTypes.string,
      seconds: PropTypes.string,
    }),
    title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    description: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    sponsor: PropTypes.shape({
      name: PropTypes.string,
      circular_logo: PropTypes.string,
      url: PropTypes.string,
    }),
    channel: PropTypes.shape({
      logo_svg: PropTypes.string,
      name: PropTypes.string,
      url: PropTypes.string,
    }),
    url: PropTypes.string,
  }).isRequired,
  variationSponsor: PropTypes.string,
  backtheme: PropTypes.string,
};

ContentCard.defaultProps = {
  variationSponsor: 'short',
  backtheme: 'light',
};

export default ContentCard;
