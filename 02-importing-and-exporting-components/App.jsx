import React from "react";
import ReactDOM from "react-dom/client";
import Gallery from "./Gallery";

export default function App() {
  return <Gallery />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
