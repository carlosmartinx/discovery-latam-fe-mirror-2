import {
  Flex, Box, Text,
} from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';
import { WrapperSponsor } from '@discovery-web-app/shared-components/src/sponsor/styled';
import { Root as ShareRoot, Title, LinkItem } from '@discovery-web-app/shared-components/src/share/styled';

const ModuleBoxMain = {
  position: 'relative',
  margin: '16px auto',
  padding: '0 15px',
};

export const Root = styled(Flex)`
  flex-wrap: wrap;
  margin: 0 auto;
  color: ${props => get(props, 'theme.colors.black', '')};
  max-width: 1250px;

  ${WrapperSponsor} {
    position: relative;
  }
`;

export const ShareModule = styled(Box)`
  position: absolute;
  left: -35px;
  top: 0;

  ${ShareRoot} {
    flex-direction: column;
    position: relative;
  }

  ${Title} {
    display: none;
  }

  ${LinkItem} {
    margin: 0 0 20px;
  }
`;

export const ModuleBox = styled(Box)`
  ${ModuleBoxMain};
  
  @media (min-width: ${props => get(props, 'theme.breakpoints.0', '')}) {
    padding: 0;
  }
`;

export const ImageBox = styled(Box)`
  position: relative;
  margin: 16px auto;
`;

export const DescCard = styled(Box)`
  display: block;
  ${ModuleBoxMain};
  
  @media (min-width: ${props => get(props, 'theme.breakpoints.0', '')}) {
    padding: 0;
  }
  
  h1 {
    font-family: ${props => get(props, 'theme.fonts.sans', '')};
    font-size: ${props => get(props, 'theme.fontSizes.5', '')}px;
    line-height: 36px;
    font-weight: bold;

    @media (min-width: ${props => get(props, 'theme.breakpoints.1', '')}) {
      font-size: ${props => get(props, 'theme.fontSizes.7', '')}px;
      line-height: 48px;
    }
  }
`;

export const ShortDesc = styled(Text)`
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  font-size: ${props => get(props, 'theme.fontSizes.2', '')}px;
  font-weight: normal;
  line-height: 24px;

  @media (min-width: ${props => get(props, 'theme.breakpoints.1', '')}) {
    font-size: calc(${props => get(props, 'theme.fontSizes.3', '')}px - 2px);
    font-weight: 600;
    line-height: 24px;
  }
`;
