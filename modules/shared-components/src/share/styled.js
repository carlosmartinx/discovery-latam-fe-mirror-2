import { Flex, Link } from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';

export const Root = styled(Flex)`
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  text-align: center;
  position: ${props => (props.mobile === true ? 'fixed'
    : 'inherit')};
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 8;

  @media (max-width: ${props => get(props, 'theme.breakpoints.2', '')}) {
    display: ${props => (props.mobile === false ? 'none'
    : 'flex')};
  }
`;

export const Title = styled(Flex)`
  align-items: center;
  color: ${props => (props.backTheme === 'dark' ? get(props, 'theme.colors.white', '')
    : get(props, 'theme.colors.black', ''))};
  background: ${props => (props.mobile === true ? get(props, 'theme.colors.facebook')
    : 'transparent')};
  font-size: ${props => get(props, 'theme.fontSizes[1]', '')}px;
  justify-content: center;
  height: ${props => (props.mobile === true ? '60px' : 'auto')};
  padding: ${props => (props.mobile === true ? '0 0 0 16px' : '0 16px')};
`;

export const LinkItem = styled(Link)`
    align-items: center;
    background-color: ${props => (props.mobile === true ? props.background
    : 'transparent')};
    display: flex;
    justify-content: center;
    height: ${props => (props.mobile === true ? '60px' : '20px')};
    flex: ${props => (props.mobile === true ? '1' : 'inherit')};
    margin: ${props => (props.mobile === true ? 'auto' : '0 16px 0 0')};
    width: ${props => (props.mobile === true ? '20px' : 'auto')};
`;

export const Image = styled.svg`
    background-image: url("${props => props.icon}");
    background-repeat: no-repeat;
    height: 20px;
    width: 20px;
    align-self: center;
    object-fit: cover;
    filter: ${(props) => {
    if (props.colorIcon === 'blue' && props.backTheme === 'light') {
      return 'invert(0.6) sepia(1) saturate(3) hue-rotate(185deg)';
    } if (props.colorIcon === 'bluetw' && props.backTheme === 'light') {
      return 'invert(0.4) sepia(1) saturate(2) hue-rotate(170deg)';
    } if (props.colorIcon === 'red' && props.backTheme === 'light') {
      return 'brightness(0.3) sepia(1) hue-rotate(315deg) saturate(5)';
    }
    return '';
  }};
`;
