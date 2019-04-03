import { Box, Flex, Heading } from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';

export const Card = styled(Flex)`
  border-bottom: 2px solid ${props => get(props, 'theme.colors.dPrimary', '')};
  padding: 9px 0 6px 0;
  color: ${props => get(props, 'theme.colors.white', '')};
  justify-content: center;
`;
export const DateShow = styled(Flex)`
  background-color: ${props => get(props, 'theme.colors.tdBackground1', '')};
  width: 193px;
  height: 109px;
  text-align: center;
  align-items: center;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`;
export const TimeDay = styled(Box)`
  margin: auto;
`;
export const Time = styled(Box)`
  display: inline;
  color: ${props => get(props, 'theme.colors.orange', '')};
  font-size: ${props => get(props, 'theme.fontSizes[8]', '48')}px;
  font-weight: bold;
  line-height: 48px;
`;
export const Day = styled(Box)`
  text-align: right;
  font-size: ${props => get(props, 'theme.fontSizes[1]', '14')}px;
  font-style: italic;
  line-height: 20px;
`;
export const InfoShow = styled(Box)`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
`;
export const Headline = styled(Heading)`
  font-size: ${props => get(props, 'theme.fontSizes[5]', '28')}px;
  font-weight: bold;
  line-height: 36px;
`;
export const Episode = styled(Box)`
  font-size: ${props => get(props, 'theme.fontSizes[2]', '16')}px;
  font-weight: bold;
  line-height: 24px;
`;
export const Description = styled(Box)`
  font-size: ${props => get(props, 'theme.fontSizes[1]', '14')}px;
  font-weight: 300;
  line-height: 20px;
`;
