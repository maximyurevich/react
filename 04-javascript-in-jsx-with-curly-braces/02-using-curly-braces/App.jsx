import React from "react";
import ReactDOM from "react-dom/client";

export default function TodoList() {
  const name = "Gregorio Y. Zara";
  return <h1>{name}&apos; To Do List</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TodoList />);
