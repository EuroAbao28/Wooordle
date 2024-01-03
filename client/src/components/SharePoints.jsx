import React, { useState } from "react";
import "./SharePoints.css";
import { IoArrowBack } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";
import { TbShare } from "react-icons/tb";

function SharePoints({ state, back, points }) {
  const [loading, setLoading] = useState(false);

  const handleShare = () => {
    setLoading(true);
  };

  const handleBack = () => {
    setLoading(false);
    back();
  };

  return (
    <div className={`share-container ${state ? "show" : "hide"}`}>
      <h1>Share Score</h1>
      <div className="points-wrapper">
        <div className="points">
          <p>{points}</p>
          <TiStarFullOutline />
        </div>
      </div>
      <div className="username">
        <input type="text" placeholder="Username" />
      </div>
      <div className="share-buttons">
        <button onClick={handleBack}>
          <IoArrowBack />
        </button>
        <button onClick={handleShare}>
          {loading ? <div className="spinner"></div> : <TbShare />}
        </button>
      </div>
    </div>
  );
}

export default SharePoints;
