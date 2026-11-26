import { Link, useParams } from 'react-router-dom';
import { users } from '../data/users.js'

export default function UserDetail() {
  const { id } = useParams();
  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return (
      <section>
        <h1>User not found</h1>
        <p>
          No user with id “{id}”. <Link to="/users">Back to users</Link>
        </p>
      </section>
    );
  }

  return (
    <section>
      <h1>{user.name}</h1>
      <p>{user.role}</p>
      <p>{user.email}</p>
      <p>{user.city}</p>
      <Link to="/users">← Back to users</Link>
    </section>
  );
}