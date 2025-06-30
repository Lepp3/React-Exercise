import { GlobalStyle } from './utils/GlobalStyles';
import { BrowserRouter } from 'react-router';
import Header from './components/Header/Header';
import PageLayout from './components/PageLayout/PageLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <PageLayout />
      </BrowserRouter>
    </>
  );
}

export default App;
