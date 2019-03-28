import styled from 'styled-components';
import {
  Flex, Box, Heading, Link,
} from 'rebass';
import get from 'lodash/get';
import { BoxSponsor } from '../sponsor/styled';

const imgStyle = {
  display: 'block',
  width: '100%',
};
export const Root = styled(Box)`
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  position: relative;
`;

export const HeaderImage = styled.img`
  ${imgStyle};
`;

export const Header = styled(Box)`
  position: relative;
  & img {
    ${imgStyle};
  }
`;

export const ChannelLogo = styled.img`
  opacity: 0.5;
`;

export const PlayIcon = styled(Box)`
  background: url(${props => get(props, 'theme.icons.playerresting', '')});
  background-repeat: no-repeat;
  background-size: 100%;
  bottom: ${props => get(props, 'theme.space[0]', '')}px;
  height: 48px;
  left: ${props => get(props, 'theme.space[0]', '')}px;
  position: absolute;
  right: ${props => get(props, 'theme.space[0]', '')}px;
  top: ${props => get(props, 'theme.space[0]', '')}px;
  width: 48px;
`;

export const GalleryIcon = styled(Box)`
  background: url(${props => get(props, 'theme.icons.gallerycardfilled', '')});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 32px;
  position: absolute;
  right: ${props => get(props, 'theme.space[1]', '')}px;
  top: ${props => get(props, 'theme.space[1]', '')}px;
  width: 32px;
`;

export const LabelContainer = styled(Flex)`
  bottom: ${props => get(props, 'theme.space[0]', '')}px;
  position: absolute;
  text-align: center;
`;

export const DurationLabel = styled(Box)`
  background: ${props => get(props, 'theme.colors.w3', '')};
  color: ${props => get(props, 'theme.colors.black', '')};
  font-size: ${props => get(props, 'theme.fontSizes[0]', '')}px;
  font-weight: bold;
  line-height: 12px;
  text-align: center;
`;

export const DurationNumber = styled(Box)`
  background: ${props => get(props, 'theme.colors.w2', '')};
  color: ${props => get(props, 'theme.colors.black', '')};
  font-size: ${props => get(props, 'theme.fontSizes[0]', '')}px;
  line-height: 12px;
  text-align: center;
`;

export const TotalDuration = styled(Box)`
  background: rgba(0, 0, 0, 0.5);
  bottom: ${props => get(props, 'theme.space[0]', '')}px;
  color: ${props => get(props, 'theme.colors.white', '')};
  font-size: ${props => get(props, 'theme.fontSizes[0]', '')}px;
  position: absolute;
  right: ${props => get(props, 'theme.space[0]', '')}px;
`;

export const ContentWrapper = styled(Flex)`
  bottom: ${props => get(props, 'theme.space[0]', '')}px;
  border-bottom: ${props => (props.isFullySponsored === true ? `3px solid${get(props, 'theme.colors.dPrimary')}` : '0')};
  flex-direction: column;
  padding: ${props => (props.isFullySponsored === true ? '0 16px' : '16px 0')};
  position: ${props => (props.isFullySponsored === true ? 'absolute' : 'inherit')}
  left: ${props => get(props, 'theme.space[0]', '')}px;
  right: ${props => get(props, 'theme.space[0]', '')}px;
  & a {
    text-decoration: none;
  }
`;

export const HeadlineWrapper = styled(Box)`
  display: block;
`;

export const Title = styled(Heading)`
  color: ${props => (props.backtheme === 'dark'
    ? get(props, 'theme.colors.black', '')
    : get(props, 'theme.colors.white', ''))};
  font-size: ${props => get(props, 'theme.fontSizes[5]', '')}px;
  line-height: 36px;
  margin: ${props => get(props, 'theme.space[1]', '')}px 0;
  text-decoration: none;
`;

export const Description = styled.p`
  color: ${props => (props.backtheme === 'dark'
    ? get(props, 'theme.colors.black', '')
    : get(props, 'theme.colors.white', ''))};
  display: ${props => (props.isFullySponsored === true ? 'none' : 'block')};
  font-size: ${props => get(props, 'theme.fontSizes[2]', '')}px;
  line-height: 24px;
  margin: ${props => get(props, 'theme.space[0]', '')}px;
  text-decoration: none;
`;

export const ImageWrapper = styled.div`
  position: relative;

  ${BoxSponsor} {
    top: ${props => get(props, 'theme.space[2]', '')}px;
    right: ${props => get(props, 'theme.space[2]', '')}px;
  }

  ${Link} {
    outline: 0;
  }
`;
