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
  padding: 10px;
  gap: 10px;
  align-items: flex-start;

  @media (max-width: 1150px) {
    width: 100%;
    align-items: center;
    padding: 0px;
  }

  @media (min-width: 2000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledHalfSectionHeadings = styled(StyledSectionTitleAndButton)`
  max-height: 120px;
`;

export const StyledWrapper = styled(StyledBaseSection)`
  display: flex;
`;

export const SectionWrapper = styled.div`
    max-width: 1800px;
    display: flex;
    flex-direction: column;

    @media (min-width: 2000px) {
    flex-direction: column;
    align-items: center;
    margin: auto;
  }
  }`;
