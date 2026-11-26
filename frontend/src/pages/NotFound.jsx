import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section>
      <h1>404 – Page not found</h1>
      <p>
        That page doesn’t exist. <Link to="/">Go home</Link>
      </p>
    </section>
  );
}