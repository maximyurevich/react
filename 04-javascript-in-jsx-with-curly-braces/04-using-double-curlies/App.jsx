import React from "react";
import ReactDOM from "react-dom/client";

const person = {
  name: "Gregorio Y. Zara",
  avatarUrl: "https://i.imgur.com/7vQD0fPs.jpg",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}&apos; Todos</h1>
      <img className="avatar" src={person.avatarUrl} alt="Gregorio Y. Zara" />
      <ul>
        <li>Imporove the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TodoList />);
