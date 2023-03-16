import React from "react";
import ReactDOM from "react-dom/client";

function Cup({ guest }) {
  return <h1>Tea cup for guest #{guest}</h1>;
}

export default function TeaSet() {
  const cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TeaSet />);
