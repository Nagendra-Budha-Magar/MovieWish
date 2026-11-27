import { Card } from './ui/Card';

export default function UserCard({ user }) {
  return (
    <Card className="flex h-full flex-col justify-between gap-4">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-fg">{user.name}</h2>
        <p className="text-sm text-muted">{user.email}</p>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
        {user.role && (
          <span className="rounded-card border border-line bg-bg px-2.5 py-1 text-fg">
            {user.role}
          </span>
        )}
        {user.city && (
          <span className="rounded-card border border-line bg-surface px-2.5 py-1 text-muted">
            {user.city}
          </span>
        )}
      </div>
    </Card>
  );
}