import React from "react";
import Backdrop from "./Backdrop";
import { AiOutlineHome } from "react-icons/ai";
import { TbPlayerTrackNext } from "react-icons/tb";
import { CgCloseR, CgCheckR } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

function ResultPopUp({ state, origWord, answer, nextLevel }) {
  const nav = useNavigate();

  return (
    <>
      <div className={`popup-window ${state ? "show" : "hide"}`}>
        <div className="answer">
          <h1>{origWord}</h1>
        </div>

        {origWord === answer.join("") ? (
          <div className="message correct">
            <p>You are correct</p>
            <CgCheckR />
          </div>
        ) : (
          <div className="message wrong">
            <p>
              Your answer <span>{answer.join("")}</span> is wrong
            </p>
            <CgCloseR />
          </div>
        )}

        <div className="popup-buttons">
          <AiOutlineHome onClick={() => nav("/")} />
          <TbPlayerTrackNext onClick={nextLevel} />
        </div>
      </div>
    </>
  );
}

export default ResultPopUp;
