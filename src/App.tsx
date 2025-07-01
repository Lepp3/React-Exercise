import { GlobalStyle } from './utils/GlobalStyles';
import { BrowserRouter } from 'react-router';
import Header from './components/Header/Header';
import PageLayout from './components/PageLayout/PageLayout';
import { UserProvider } from './contexts/UserContext/UserProvider';
import { CardProvider } from './contexts/CardContext/CardProvider';
import { useUserContext } from './contexts/UserContext/useUserContext';
import LoginForm from './components/LoginForm/LoginForm';

function AppGate() {
  const { authData } = useUserContext();

  if (!authData.name) {
    return <LoginForm />;
  }

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

function App() {
  return (
    <UserProvider>
      <CardProvider>
        <AppGate />
      </CardProvider>
    </UserProvider>
  );
}

export default App;
