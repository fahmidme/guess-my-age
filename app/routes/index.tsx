import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Guess My Age</h1>
      <ul>
        <li>
          <Link
            to="/play"
            className="text-xl text-blue-600 underline"
          >
            Play Game
          </Link>
        </li>
      </ul>
    </div>
  );
}
