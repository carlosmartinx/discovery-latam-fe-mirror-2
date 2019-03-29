import { Box } from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';

export const ButtonPlayer = styled.a`
  background: ${props => get(props, 'theme.colors.dPrimary', '')};
  color: ${props => get(props, 'theme.colors.white', '')};
  cursor: pointer;
  font-size: ${props => get(props, 'theme.fontSizes[2]', '')}px;
  line-height: 24px;
  padding: ${props => get(props, 'theme.space[2]', '')}px
  ${props => get(props, 'theme.space[2]', '')}px;
  text-decoration: none;
  trasition: all 0.5 ease;

  &:hover {
    background: ${props => get(props, 'theme.colors.dSecondary', '')};
  }
`;

export const ButtonIcon = styled.span`
  background: url(${props => get(props, 'theme.icons.videoplayfilled', '')}) center;
  background-repeat: no-repeat;
  display: inline-block;
  height: 32px;
  filter: invert(100%);
  margin-right: ${props => get(props, 'theme.space[1]', '')}px
  vertical-align: bottom;
  width: 32px;
`;

export const ButtonContainer = styled(Box)`
  display: block;
  margin: ${props => get(props, 'theme.space[3]', '')}px 0;

  .ap {
    background: ${props => get(props, 'theme.colors.apPrmary', '')};
    &:hover {
      background: ${props => get(props, 'theme.colors.apSecondary', '')};
    }
  }

  .turbo {
    background: ${props => get(props, 'theme.colors.turboPrimary', '')};
    &:hover {
      background: ${props => get(props, 'theme.colors.turboSecondary', '')};
    }
  }

  .sc {
    background: ${props => get(props, 'theme.colors.scPrimary', '')};
    &:hover {
      background: ${props => get(props, 'theme.colors.scSecondary', '')};
    }
  }

  .id {
    background: ${props => get(props, 'theme.colors.idPrimary', '')};
    &:hover {
      background: ${props => get(props, 'theme.colors.idSecondary', '')};
    }
  }

  .hh {
    background: ${props => get(props, 'theme.colors.hhPrimary', '')};
    &:hover {
      background: ${props => get(props, 'theme.colors.hhSecondary', '')};
    }
  }

  .tlc {
    background: ${props => get(props, 'theme.colors.tlcPrimary', '')};
    &:hover {
      background: ${props => get(props, 'theme.colors.tlcSecondary', '')};
      color: ${props => get(props, 'theme.colors.black', '')};
    }
  }

  .fn {
    background: ${props => get(props, 'theme.colors.fnPrimary', '')};
    &:hover {
      background: ${props => get(props, 'theme.colors.fnSecondary', '')};
    }
  }

  .dk {
    background: ${props => get(props, 'theme.colors.dkPrimary', '')};
    &:hover {
      background: ${props => get(props, 'theme.colors.dkSecondary', '')};
    }
  }

  .td {
    background: ${props => get(props, 'theme.colors.tdPrimary', '')};
    &:hover {
      background: ${props => get(props, 'theme.colors.tdSecondary', '')};
    }
  }

`;
