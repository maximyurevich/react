import React from "react";
import ReactDOM from "react-dom/client";

export default function TodoList() {
  return (
    <>
      <h1>Hedy Lamarr&apos; Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<TodoList />);
