import styled from 'styled-components';
import get from 'lodash/get';

const StyledPage = styled.div`
  background: ${props => (props.background === '' ? get(props, 'theme.colors.dPrimary', '') : props.background)};
`;

export default StyledPage;
