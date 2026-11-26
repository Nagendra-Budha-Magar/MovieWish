import { useEffect, useState } from 'react';
import UserCard from '../components/UserCard.jsx';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import { users } from '../data/users.js';

export default function Users() {
  const [query, setQuery] = useLocalStorage('users-search', '');
  const [width, setWidth] = useState(window.innerWidth);

  // useEffect with cleanup: subscribe on mount, unsubscribe on unmount.
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const q = query.trim().toLowerCase();
  const filtered = users.filter(
    (u) => u.name.toLowerCase().includes(q) || u.role.toLowerCase().includes(q),
  );

  return (
    <section>
      <h1>Users</h1>
      <input
        type="search"
        placeholder="Search by name or role"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search users"
      />
      <p className="muted">Viewport width: {width}px</p>
      {filtered.length === 0 ? (
        <p>No users match “{query}”.</p>
      ) : (
        <ul className="user-list">
          {filtered.map((u) => (
            <UserCard key={u.id} user={u} />
          ))}
        </ul>
      )}
    </section>
  );
}