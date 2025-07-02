import styled from 'styled-components';
import { StyledBaseSection } from '../../../utils/GlobalStyles';

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const StyledHalfSection = styled(StyledBaseSection)`
  width: 45%;
  display: flex;
  flex-wrap: wrap;
  border: none;
`;

export const StyledWrapper = styled(StyledBaseSection)`
  display: flex;
`;
