import { useEffect, useState } from 'react';
import UserCard from '../components/UserCard.jsx';
import { Card } from '../components/ui/Card.jsx';
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
    (u) =>
      u.name.toLowerCase().includes(q) ||
      u.role.toLowerCase().includes(q) ||
      u.city?.toLowerCase().includes(q),
  );

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-fg">Users</h1>
          <p className="text-sm text-muted">Viewport width: {width}px</p>
        </div>

        <input
          type="search"
          placeholder="Search by name or role"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search users"
          className="w-full rounded-card border border-line bg-surface px-3 py-2 text-sm text-fg placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-72"
        />
      </div>

      {filtered.length === 0 ? (
        <Card>
          <p className="text-sm text-muted">No users match “{query}”.</p>
        </Card>
      ) : (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((u) => (
            <li key={u.id}>
              <UserCard user={u} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}