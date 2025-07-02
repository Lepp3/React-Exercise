import styled from 'styled-components';
import {
  StyledBaseSection,
  StyledSectionTitleAndButton,
} from '../../../utils/GlobalStyles';

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
  justify-content: flex-start;
  padding: 10px;
`;

export const StyledHalfSectionHeadings = styled(StyledSectionTitleAndButton)`
  max-height: 120px;
`;

export const StyledWrapper = styled(StyledBaseSection)`
  display: flex;
`;
