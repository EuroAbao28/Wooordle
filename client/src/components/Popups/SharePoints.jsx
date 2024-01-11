import React, { useState } from "react";
import "./SharePoints.css";
import { IoArrowBack } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";
import { TbShare } from "react-icons/tb";
import axios from "axios";
import { shareAPI } from "../../APIs/LeaderBoardAPI";

function SharePoints({ state, back, points }) {
  const [username, setusername] = useState("");
  const [isLoading, setISLoading] = useState(false);

  const handleShare = async () => {
    setISLoading(true);

    try {
      const response = await axios.post(shareAPI, {
        username,
        mode: window.location.pathname.split("/").filter(Boolean).pop(),
        score: points,
      });

      console.log(response.data);
      setISLoading(false);
      back();
    } catch (error) {
      console.error(error);
    }
  };

  const handleBack = () => {
    setISLoading(false);
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
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
      </div>
      <div className="share-buttons">
        <button onClick={handleBack}>
          <IoArrowBack />
        </button>
        <button onClick={handleShare}>
          {isLoading ? <div className="share-spinner"></div> : <TbShare />}
        </button>
      </div>
    </div>
  );
}

export default SharePoints;
