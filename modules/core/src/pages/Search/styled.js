import styled from 'styled-components';
import get from 'lodash/get';
import {
  Heading as HeadingBase, Box, Button, Text,
} from 'rebass';
import {
  Root as CardRoot,
  ImageWrapper,
  ContentWrapper,
} from '@discovery-web-app/shared-components/dist/content-card/styled';

export const Heading = styled(HeadingBase)`
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  font-size: 36px;
  max-width: ${props => get(props, 'theme.breakpoints.3', '')};
  color: ${props => get(props, 'theme.colors.white', '')};
  margin: 0 auto;
  width: 100%;
  padding: 15px 0;
`;

export const SearchBox = styled(Box)`
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  position: relative;
  width: 100%;
  padding: 20px 0;
  margin: 0 auto;
  max-width: ${props => get(props, 'theme.breakpoints.3', '')};

  @media (min-width: ${props => get(props, 'theme.breakpoints.0', '')}) {
    ${CardRoot} {
      display: flex;
      padding: 15px 0;
      margin: 0 auto;
    }

    ${ImageWrapper} {
      width: calc((100% * 2) / 4);
    }

    ${ContentWrapper} {
      width: calc((100% * 2) / 4);
      padding: 0 15px;

      h2 {
        margin-top: 0;
      }
    }
  }

  @media (min-width: ${props => get(props, 'theme.breakpoints.1', '')}) {
    ${ImageWrapper} {
      width: calc((100% * 2) / 6);
    }

    ${ContentWrapper} {
      width: calc((100% * 4) / 6);
    }
  }

  @media (min-width: ${props => get(props, 'theme.breakpoints.2', '')}) {
    ${ImageWrapper} {
      width: calc((100% * 2) / 12);
    }

    ${ContentWrapper} {
      width: calc((100% * 10) / 12);
    }
  }
`;

export const LoadMore = styled(Button)`
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  color: ${props => get(props, 'theme.colors.white', '')};
  margin: 20px auto;
  display: block;
  width: 100%;
  cursor: pointer;
  background-color: ${props => get(props, 'theme.colors.tdBackground1', '')};
`;

export const DefaulMessage = styled(Text)`
  max-width: ${props => get(props, 'theme.breakpoints.3', '')};
  color: ${props => get(props, 'theme.colors.white', '')};
  margin: 0 auto;
  width: 100%;
  padding: 15px;
  text-align: center;
  font-size: 20px;
  line-height: 24px;
  
  span {
    display: block;
    font-size: 28px;
  }
`;
