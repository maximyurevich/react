import React from "react";
import ReactDOM from "react-dom/client";

function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Ketherine Johnson" />;
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Gallery />);
