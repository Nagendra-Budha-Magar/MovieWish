import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Home() {
  const { user } = useAuth();
  return (
    <section>
      <h1>Frontend Lab</h1>
      <p>{user ? `Welcome back, ${user.name}!` : 'A practice app for routing, context and hooks.'}</p>
      <p>
        <Link to="/users">Browse users</Link>
        {user && (
          <>
            {' · '}
            <Link to="/profile">Your profile</Link>
          </>
        )}
      </p>
    </section>
  );
}