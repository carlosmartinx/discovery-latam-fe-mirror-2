import {
  Flex, Box, Text,
} from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';
import { WrapperSponsor } from '../../../../shared-components/src/sponsor/styled';

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

export const ModuleBox = styled(Box)`
  ${ModuleBoxMain};
`;

export const ImageBox = styled(Box)`
  position: relative;
  margin: 16px auto;
`;

export const DescCard = styled(Box)`
  display: block;
  ${ModuleBoxMain};
  
  h1 {
    font-family: ${props => get(props, 'theme.fonts.sans', '')};
    font-size: ${props => get(props, 'theme.fontSizes.5', '')}px;
    line-height: 36px;
    font-weight: bold;

    @media (min-width: ${props => get(props, 'theme.breakpoints[1]', '')}) {
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

  @media (min-width: ${props => get(props, 'theme.breakpoints[1]', '')}) {
    font-size: calc(${props => get(props, 'theme.fontSizes.3', '')}px - 2px);
    font-weight: 600;
    line-height: 24px;
  }
`;
