import { createGlobalStyle, styled } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,*:after,*:before{
box-sizing: border-box;
margin: 0;
padding: 0;
}

html,body{
font-family: 'Inter', sans-serif;
background-color: #e1e3de;
font-size: 16px;
height: 100%;
}

a{
text-decoration:none;
color:inherit;
}

ul{
list-style:none;
display: flex;
}

button{
font-family: inherit;
cursor: pointer;
border: none;
background: none;
}
`;

export const StyledBaseSection = styled.section`
  border-bottom: 1px solid gray;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
  height: auto;
  width: 100%;
  justify-content: space-around;
`;

export const StyledSectionTitleAndButton = styled.div`
  display: flex;
  width: 100%;
  flex: 0 0 100%;
  padding: 15px;
  justify-content: space-between;
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
