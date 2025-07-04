import styled from 'styled-components';
import { StyledBaseSection } from '../Sections.styles';

export const StyledHero = styled(StyledBaseSection)`
  background-image: url('https://images.unsplash.com/photo-1533460004989-cef01064af7e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JlZW4lMjBncmFzc3xlbnwwfHwwfHx8MA%3D%3D');
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  max-width: none;
`;
