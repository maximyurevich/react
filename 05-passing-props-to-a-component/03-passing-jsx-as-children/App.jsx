import Avatar from "./Avatar";

import React from "react";
import ReactDOM from "react-dom/client";

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </Card>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Profile />);
