import { useEffect } from "react";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio | Stephen Werronen";
  }, []);

  return <h1>Portfolio</h1>;
}
