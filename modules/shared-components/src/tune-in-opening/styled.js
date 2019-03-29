import { Box, Flex, Heading } from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';
import { LinkItem } from '../share/styled';

export const Root = styled(Box)`
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  line-height: 32px;
  margin: 0 auto;
  max-height: 572px;
  overflow: hidden;
  position: relative;
  transition: all 0.5 ease;

  &:before {
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%);
    bottom: 0;
    content: '';
    display: block;
    height: 30%;
    left: 0;
    position: absolute;
    right: 0;
    width: 100%;
    z-index: 2;
  }

  @media (min-width: ${props => get(props, 'theme.breakpoints.2', '')}) {
    max-height: 410px;

    &:before {
      display: none;
    }
  }

  @media (min-width: ${props => get(props, 'theme.breakpoints.3', '')}) {
    max-height: 554px;
  }
  @media (min-width: ${props => get(props, 'theme.breakpoints.4', '')}) {
    max-height: 710px;
  }
`;

export const VideoContainer = styled(Box)`
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 100%;
`;

export const Mute = styled(Box)`
  background:url(${props => (props.muted === true
    ? get(props, 'theme.icons.volumeonfilled', '')
    : get(props, 'theme.icons.volumeofffilled', ''))}); 
  background-position: center;
  cursor: pointer;
  filter: invert(100%);
  height: 24px;
  position: absolute;
  top: ${props => get(props, 'theme.space[1]', '')}px;
  text-transform: uppercase;
  right: ${props => get(props, 'theme.space[1]', '')}px;
  line-height: 32px;
  width: 24px;
  z-index: 2;
`;

export const Video = styled.video`
  height: 100%;
  width: auto;
  @media (min-width: ${props => get(props, 'theme.breakpoints[1]', '')}) {
    width: 100%;
    height: auto;
  }
`;

export const TuneContent = styled(Box)`
  bottom: ${props => get(props, 'theme.space[0]', '')}px;
  left: ${props => get(props, 'theme.space[0]', '')}px;
  position: absolute;
  line-height: 32px;
  margin: auto;
  right: ${props => get(props, 'theme.space[0]', '')}px;
  z-index: 2;
`;

export const ChannelLogo = styled.img`
  height: 72px;
  object-fit: cover;
  transform-origin: bottom left;

  @media (min-width: ${props => get(props, 'theme.breakpoints[3]', '')}) {
    height: 80px;
  }
`;

export const DurationLabel = styled(Box)`
  background: ${props => get(props, 'theme.colors.w3', '')};
  font-size: ${props => get(props, 'theme.fontSizes[0]', '')}px;
  font-weight: bold;
  line-height: 12px;
  text-align: center;
`;

export const DurationNumber = styled(Box)`
  background: ${props => get(props, 'theme.colors.w2', '')};
  font-size: ${props => get(props, 'theme.fontSizes[0]', '')}px;
  line-height: 12px;
  text-align: center;
`;

export const Headline = styled(Heading)`
  color: ${props => get(props, 'theme.colors.white', '')};
  font-size: ${props => get(props, 'theme.fontSizes[5]', '')}px;
  line-height: 36px;
  text-transform: uppercase;

  @media (min-width: ${props => get(props, 'theme.breakpoints.2', '')}) {
    font-size: ${props => get(props, 'theme.fontSizes[7]', '')}px;
    line-height: 48px;
  }
`;

export const LabelContainer = styled(Flex)`
  text-align: center;
`;

export const TuneBG = styled(Box)`
  overflow: hidden;
  text-align: center;

  & img {
    width: 100%;

    @media (max-width: ${props => get(props, 'theme.breakpoints[1]', '')}) {
      width: auto;
      height: 100%;
    }
  }
`;

export const ScheduleLink = styled(Flex)`
  align-items: center;
  border-left: 4px solid ${props => get(props, 'theme.colors.dPrimary', '')};
  color: ${props => get(props, 'theme.colors.white', '')};
  font-size: ${props => get(props, 'theme.fontSizes[2]', '')}px;
  line-height: 8px;
  margin: ${props => get(props, 'theme.space[2]', '')}px 0 ${props => get(props, 'theme.space[4]', '')}px;

  & a {
    align-items: baseline;
    color: ${props => get(props, 'theme.colors.white', '')};
    display: flexbox;
    font-weight: 300;
    text-decoration: none;
  }
`;

export const ButtonContainer = styled(Box)`
  display: none;

  @media (min-width: ${props => get(props, 'theme.breakpoints.1', '')}) {
    display: block;
  }
`;

export const ProgramIcon = styled.span`
  background:url(${props => get(props, 'theme.icons.program', '')});
  background-position: center;
  background-repeat: no-repeat; 
  display: block;
  filter: invert(100%);
  margin-right: ${props => get(props, 'theme.space[1]', '')}px;
  height: 16px;
  width: 24px;
`;

export const Hashtag = styled(Heading)`
  color: ${props => get(props, 'theme.colors.white', '')};
  line-height: 28px;
  text-transform: uppercase;

  @media (min-width: ${props => get(props, 'theme.breakpoints.2', '')}) {
    line-height: 32px;
  }
  @media (min-width: ${props => get(props, 'theme.breakpoints.3', '')}) {
    line-height: 36px;
  }
`;

export const SocialContainer = styled(Box)`
  margin-right: ${props => get(props, 'theme.space[2]', '')}px;
  text-align: right;

  @media (min-width: ${props => get(props, 'theme.breakpoints[1]', '')}) {
    position: absolute;
    bottom: ${props => get(props, 'theme.space[4]', '')}px;
    right: ${props => get(props, 'theme.space[3]', '')}px;
  }
  @media (min-width: ${props => get(props, 'theme.breakpoints[2]', '')}) {
    bottom: ${props => get(props, 'theme.space[4]', '')}px;
    right: ${props => get(props, 'theme.space[4]', '')}px;
  }
`;

export const ShareBox = styled(Flex)`
  margin: ${props => get(props, 'theme.space[2]', '')}px 0 0;

    ${LinkItem} {
      &:last-of-type {
        margin-right: 0;
      }
    }
`;
