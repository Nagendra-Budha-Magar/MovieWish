import { Link } from 'react-router-dom';

export default function UserCard({ user }) {
  return (
    <li className="user-card">
      <h3>
        <Link to={`/users/${user.id}`}>{user.name}</Link>
      </h3>
      <p>{user.role}</p>
      <p className="muted">{user.city}</p>
    </li>
  );
}