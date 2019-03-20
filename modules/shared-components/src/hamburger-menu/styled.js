// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Flex, Box } from 'rebass';
import get from 'lodash/get';

export const WrapperFlex = styled(Flex)`
  &.opened {
    &:before {
      content: '';
      display: block;
      background: rgba(0,0,0,0.5);
      left: 0;
      height: 100%;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
`;
export const WrapperMenu = styled.div`
  background: ${props => get(props, 'theme.colors.tdBlueGray', '')};
  display: block;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
  max-width: ${props => get(props, 'theme.breakpoints[0]', '')};
`;
export const WrapperBox = styled(Flex)`
  left: 0;
  position: relative;
  width: 200%;
  &.normal {
    left: 0;
  }
  &.showSeries {
    left: -100%;
  }
`;
export const ItemsMenu = styled(Flex)`
  max-width: ${props => get(props, 'theme.breakpoints[0]', '')};
`;
export const DataChannel = styled.div`
  width: ${props => get(props, 'theme.breakpoints[0]', '')};
`;
export const TopBar = styled(Flex)`
  background: ${props => get(props, 'theme.colors.tdBackground1', '')};
  color: ${props => get(props, 'theme.colors.white', '')};
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  height: 56px;
  text-transform: uppercase;
  align-items: center;
`;
const BaseButton = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  cursor: pointer;
  padding: 0;
  height: 20px;
  width: 20px;
`;
export const LinkClose = styled(BaseButton)`
  background-image: url(${props => get(props, 'theme.icons.close', '')});
  filter: brightness(100%);
`;
export const LinkBack = styled(BaseButton)`
  background-image: url(${props => get(props, 'theme.icons.back', '')});
  filter: invert(100%);
`;
export const MenuElem = styled(Box)`
  min-width: 128px;
`;
