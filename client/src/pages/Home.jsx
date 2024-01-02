import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { MdOutlineLeaderboard } from "react-icons/md";
import { GrSun } from "react-icons/gr";

function Home() {
  const nav = useNavigate();
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <header>
          <h1>Wooordle</h1>
          <div className="header-buttons">
            <MdOutlineLeaderboard />
            <GrSun />
          </div>
        </header>
        <h3>Game Modes</h3>
        <div className="levels-container">
          <button onClick={() => nav("easy")}>Easy</button>
          <button onClick={() => nav("medium")}>Medium</button>
          <button onClick={() => nav("hard")}>Hard</button>
        </div>
        <div className="developer">
          <h5>Euro Abao</h5>
          <p>Developed by</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
