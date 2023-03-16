import React from "react";
import ReactDOM from "react-dom/client";

import { getImageUrl } from "../utils";
import { people } from "../data";

export default function List() {
  const listItems = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}</b>
        {` ${person.profession} known for ${person.accomplishment} `}
      </p>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<List />);
