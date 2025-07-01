import { useState } from 'react';
import { useUserContext } from '../../contexts/UserContext/useUserContext';
import {
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledLoginButton,
} from './LoginForm.styles';

function LoginForm() {
  const [name, setName] = useState('');
  const { userLoginHandler } = useUserContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      userLoginHandler({ name: name.trim() });
    }
  };

  return (
    <StyledFormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <h1>Welcome, log in to view content.</h1>
        <StyledInput
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-2 py-1 rounded w-full mb-2"
        />
        <StyledLoginButton
          type="submit"
          className="bg-blue-500 text-white px-4 py-1 rounded w-full"
        >
          Login
        </StyledLoginButton>
      </StyledForm>
    </StyledFormWrapper>
  );
}

export default LoginForm;
