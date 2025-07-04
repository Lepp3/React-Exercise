import styled from 'styled-components';

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
`;

export const SectionWrapper = styled.div`
  max-width: 1800px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1150px) {
    align-self: center;
  }
  
  @media (min-width: 2000px) {
    flex-direction: column;
    align-items: center;
    margin: auto;
    }
  }`;

export type Orientation = 'row' | 'column';

interface BaseSectionProps {
  $orientation?: Orientation;
}

export const StyledBaseSection = styled.section<BaseSectionProps>`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
  flex: 1;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: ${({ $orientation = 'row' }) => $orientation};

  @media (max-width: 1150px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const StyledSectionTitleAndButton = styled.div`
  display: flex;
  width: 100%;
  // flex: 0 0 100%;
  padding: 15px;
  justify-content: space-between;

  @media (max-width: 1150px) {
    flex: 1 1 auto;
  }
`;

export const StyledSectionActionButton = styled.button`
  align-self: center;
  font-size: 20px;
`;

export const StyledSectionLabelAndTitleHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const StyledSectionLabel = styled.h3`
  opacity: 0.8;
  font-weight: bold;
  font-size: 1.3rem;
`;

export const StyledSectionTitle = styled.h2`
  font-weight: bold;
  font-size: 1.8rem;
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
