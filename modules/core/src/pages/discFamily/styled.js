import {
  Flex, Text, Link,
  Card, Box, Image,
} from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';

export const WrapperFamily = styled(Card)`
  background-image: url(../../images/fondo-familia.jpg);
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  margin: 0 auto;
  padding-top: 120px;
  width: 100%;
  z-index: 1;
  flex-wrap: wrap;
  @media (max-width: ${props => get(props, 'theme.breakpoints.2', '')}) {
    padding-top: 50px;
    clip-path: polygon(0 0,100% 0,100% 95%,0% 100%);
    padding-bottom: 70px;
  }
  @media (max-width: ${props => get(props, 'theme.breakpoints.1', '')}) {
    padding-bottom: 50px
  }
  ${Flex} {
    width: 1140px;
    @media (max-width: ${props => get(props, 'theme.breakpoints.2', '')}) {
      width: 100%;
      flex-wrap: wrap;
    }
  }
  }
`;

export const FamilyText = styled(Text)`
  width: 100%;
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  font-size: calc(${props => get(props, 'theme.fontSizes.7', '')}px - 4px);
  font-weight: 600;
  font-style: italic;
  line-height: 1.2;
  @media (max-width: ${props => get(props, 'theme.breakpoints.2', '')}) {
    font-size: calc(${props => get(props, 'theme.fontSizes.4', '')}px + 2px);
    width: 62%;
    padding-left: 19px;
  }
`;

export const DowText = styled(FamilyText)`
  font-size: calc(${props => get(props, 'theme.fontSizes.9', '')}px + 5px);
  text-transform: uppercase;
  letter-spacing: 3px;
  padding: 20px 0 45px;
  @media (max-width: ${props => get(props, 'theme.breakpoints.2', '')}) {
    letter-spacing: 0;
    width: 100%;
  }
  @media (max-width: ${props => get(props, 'theme.breakpoints.1', '')}) {
    padding: 20px 0 0 19px
  }
`;

export const LinkUrl = styled(Link)`
  padding: 10px 0;
  @media (max-width: ${props => get(props, 'theme.breakpoints.1', '')}) {
    display: none;
  }
`;

export const BoxImg = styled(Box)`
  overflow: hidden;
  width: 67%
  ${Image} {
    max-width: initial;
    height: auto;
  }
  @media (max-width: ${props => get(props, 'theme.breakpoints.2', '')}) {
    width: 100%
    position: absolute;
    ${Image} {
      max-width: 100%;
      overflow: hidden;
      transform: translate(50%);
    }
  }
`;

export const ContentBox = styled(Flex)`
  margin: -200px auto;
  background-color: ${props => get(props, 'theme.colors.white', '')}
  clip-path: polygon(0 10%,100% 0,100% 100%,0 100%);
  color: ${props => get(props, 'theme.colors.black', '')}
  width: 100%;
  ${Box} {
    max-width: 1140px;
  }
  @media (max-width: ${props => get(props, 'theme.breakpoints.2', '')}) {
    clip-path: none;
    margin: 0 auto;
    flex-wrap: wrap;
    ${Box} {
      max-width: 100%;
    }
  }
`;

export const BoxMb = styled(Box)`
  @media (max-width: ${props => get(props, 'theme.breakpoints.1', '')}) {
    ${LinkUrl} {
    display: flex;
    justify-content: center;
    padding: 10px;
    }
  }
`;

export const ContentList = styled(Flex)`
  width: 100%;
  margin-bottom: 120px;
  border-bottom: 1px solid #1eb44a;
  @media (max-width: ${props => get(props, 'theme.breakpoints.2', '')}) {
    border-bottom: 0
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 40px;
      width: 80%;
      background: #1eb44a;
      height: 3px;
    }
  }
  .ProgramsList {
    display: inline-flex;
    flex-wrap: wrap;
    max-width: 550px;
    margin: 0 auto;
    padding: 0;
    list-style: none;
    margin-bottom: 75px;
    @media (max-width: ${props => get(props, 'theme.breakpoints.2', '')}) {
      max-width: 100%;
      margin-bottom: 50px;
      padding-left: 50px;
    }
    li {
      display: flex;
      width: 47%;
      font-family: ${props => get(props, 'theme.fonts.sans', '')};
      font-size: ${props => get(props, 'theme.fontSizes.4', '')}px;
      @media (max-width: ${props => get(props, 'theme.breakpoints.2', '')}) {
        width: 100%;
      }
      &:nth-child(2n) {
        margin-left: 30px;
        @media (max-width: ${props => get(props, 'theme.breakpoints.2', '')}) {
          margin-left: 0;
      }
      }
    }
  }
`;
