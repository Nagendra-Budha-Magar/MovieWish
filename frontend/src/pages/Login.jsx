import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email);
    navigate(location.state?.from ?? '/profile', { replace: true });
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email{' '}
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>{' '}
        <button type="submit">Log in</button>
      </form>
      <p className="muted">Stub login: any email works for now.</p>
    </section>
  );
}