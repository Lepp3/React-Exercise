import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const StyledModal = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 14px 0;
`;

export const StyledInput = styled.input`
  padding: 7px 16px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 16px;
  text-align: center;

  &:focus {
    text-align: left;
  }
`;

export const StyledTextArea = styled.textarea`
  padding: 7px 16px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 16px;
  text-align: center;

  &:focus {
    text-align: left;
  }
`;
