import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { Button } from "../components/ui/Button.jsx";
import { Card } from "../components/ui/Card.jsx";

export default function Home() {
  const { user } = useAuth();
  return (
    <section className="flex flex-col gap-6 rounded-card border border-line bg-surface p-6 md:flex-row md:items-center md:justify-between">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-fg">Frontend Lab</h1>
        <p className="text-muted">
          {user
            ? `Welcome back, ${user.name}!`
            : "A practice app for routing, context and hooks."}
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link to="/users">
            <Button type="button" variant="primary">
              Browse users
            </Button>
          </Link>
          {user && (
            <Link to="/profile">
              <Button type="button" variant="ghost">
                Your profile
              </Button>
            </Link>
          )}
        </div>
      </div>

      <Card className="md:w-64">
        <p className="text-sm text-muted">
          Flexbox Hero: stacked below md, side-by-side at md+.
        </p>
      </Card>
    </section>
  );
}
