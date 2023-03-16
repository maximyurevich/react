import React from "react";
import ReactDOM from "react-dom/client";

import { getImageUrl } from "../utils";

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Profile
    size={100}
    person={{
      name: "Aklilu Lemma",
      imageId: "OKS67lh",
    }}
  />,
);
