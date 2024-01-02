import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { TbPlayerTrackNext } from "react-icons/tb";
import { CgCloseR } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { TiStarFullOutline } from "react-icons/ti";

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
            <p>You are correct!</p>
            <div className="plus-points">
              <p>+10</p>
              <TiStarFullOutline />
            </div>
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
