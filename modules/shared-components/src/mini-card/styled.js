import styled from 'styled-components';
import {
  Box, Link, Image, Heading, Flex,
} from 'rebass';
import get from 'lodash/get';

export const EffectBox = styled(Box)`
  border-radius: 8px;
  perspective: 1000px;
  overflow: hidden;
  position: relative;
  min-width: 128px;
`;
export const Card = styled(Box)`
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  font-weight: 600;
  height: 155px;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  &.flipped {
    transform: rotateY(180deg);
  }
`;
const Wrapper = styled(Flex)`
  backface-visibility: hidden;
  transform-origin: center;
  height: 100%;
  padding-left: 4px;
  padding-right: 4px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;
export const WrapperFront = styled(Wrapper)`
  background: ${props => get(props, 'theme.colors.white', '')};
  transform: rotateY(0deg);
  z-index: 2;
`;
export const WrapperBack = styled(Wrapper)`
  background: ${props => get(props, 'theme.colors.apPrmary', '')};
  transform: rotateY(180deg);

  &.discovery {
    background: ${props => get(props, 'theme.colors.discovery', '')};
  }
  &.tlc {
    background: ${props => get(props, 'theme.colors.tlc', '')};
  }
  &.kids {
    background: ${props => get(props, 'theme.colors.kids', '')};
  }
  &.animalPlanet {
    background: ${props => get(props, 'theme.colors.animalPlanet', '')};
  }
  &.discoveryhh {
    background: ${props => get(props, 'theme.colors.discoveryhh', '')};
  }
  &.turbo {
    background: ${props => get(props, 'theme.colors.turbo', '')};
  }
  &.science {
    background: ${props => get(props, 'theme.colors.science', '')};
  }
  &.id {
    background: ${props => get(props, 'theme.colors.id', '')};
  }
`;
export const LinkWrapper = styled(Link)`
  color: ${props => get(props, 'theme.colors.tdBackground1', '')};
  display: block;
  text-decoration: none;
`;
const BaseButton = styled.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  &:focus {
    outline: none;
  }
`;
export const LinkOptions = styled(BaseButton)`
  color: ${props => get(props, 'theme.colors.w3', '')};
  font-size: 21px;
  font-weight: bold;
  transform: rotate(-90deg);
  width: 24px;
`;
export const LinkBack = styled(BaseButton)`
  background: url(${props => get(props, 'theme.icons.back', '')}) no-repeat;
  background-size: cover;
  filter: invert(100%);
  height: 20px;
  width: 20px;
`;
export const ImgWrapper = styled(Flex)`
  background: ${props => get(props, 'theme.colors.g3', '')};
  border-radius: 50%;
  height: 72px;
  padding: 8px;
  width: 72px;

  &.discovery {
    background: ${props => get(props, 'theme.colors.discovery', '')};
  }
  &.tlc {
    background: ${props => get(props, 'theme.colors.tlc', '')};
  }
  &.kids {
    background: ${props => get(props, 'theme.colors.kids', '')};
  }
  &.animalPlanet {
    background: ${props => get(props, 'theme.colors.animalPlanet', '')};
  }
  &.discoveryhh {
    background: ${props => get(props, 'theme.colors.discoveryhh', '')};
  }
  &.turbo {
    background: ${props => get(props, 'theme.colors.turbo', '')};
  }
  &.science {
    background: ${props => get(props, 'theme.colors.science', '')};
  }
  &.id {
    background: ${props => get(props, 'theme.colors.id', '')};
  }
`;

export const ImgLogo = styled(Image)`
  display: block;
  height: auto;
  width: 72px;
`;
export const TextNav = styled(Heading)`
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
`;
export const OptionLink = styled(Link)`
  background: ${props => get(props, 'theme.colors.white', '')};
  border-radius: 8px;
  cursor: pointer;
  flex-align: baseline;
  color: ${props => get(props, 'theme.colors.tdBackground1', '')};
  font-size: 11px;
  line-height: 21px;
  padding-left: 4px;
  padding-right: 4px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
`;
