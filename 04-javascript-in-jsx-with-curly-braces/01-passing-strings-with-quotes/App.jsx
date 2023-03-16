import React from "react";
import ReactDOM from "react-dom/client";

export default function Avatar() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Greorio Y. Zara";
  return <img className="avatar" src={avatar} alt={description} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Avatar />);
