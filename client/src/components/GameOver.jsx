import React from "react";
import "./GameOver.css";
import { useNavigate } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { VscDebugRestart } from "react-icons/vsc";
import { TbShare } from "react-icons/tb";

function GameOver({ state, restart, score }) {
  const nav = useNavigate();
  return (
    <div className={`gameOver-container ${state ? "show" : "hide"}`}>
      <h1>Game Over </h1>
      <h3>{score}</h3>
      <p>Your score</p>
      <div className="gameOver-buttons">
        <RiHome2Line onClick={() => nav("/")} />
        <VscDebugRestart onClick={restart} />
        <TbShare />
      </div>
    </div>
  );
}

export default GameOver;
