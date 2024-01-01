import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const nav = useNavigate();
  return (
    <div>
      <h1>Wooordle</h1>
      <button onClick={() => nav("easy")}>Easy</button>
      <button onClick={() => nav("medium")}>Medium</button>
      <button onClick={() => nav("hard")}>Hard</button>
    </div>
  );
}

export default Home;
