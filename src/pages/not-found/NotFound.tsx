import { useEffect } from "react";
import { Link } from "react-router";

export default function NotFound() {
  useEffect(() => {
    document.title = "Not Found";
  }, []);

  return (
    <main>
      <h1>Page Not Found</h1>
      <p>The page you were looking for does not exist.</p>
      <Link to="/">Go home</Link>
    </main>
  );
}
