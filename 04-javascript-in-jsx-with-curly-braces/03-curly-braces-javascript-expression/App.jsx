import React from "react";
import ReactDOM from "react-dom/client";

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export default function TodoList() {
  return <h1>To Do List for {formatDate(today)}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TodoList />);
