import React, { useState } from "react";
import "./SharePoints.css";
import { IoArrowBack } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";
import { TbShare } from "react-icons/tb";
import axios from "axios";
import { shareAPI } from "../../APIs/LeaderBoardAPI";

function SharePoints({ state, back, points, hideShareButton }) {
  const [username, setusername] = useState("");
  const [isLoading, setISLoading] = useState(false);
  const [isButtonDisable, setIsButtonDisable] = useState(true);

  const handleShare = async () => {
    setISLoading(true);

    if (!username) return console.log("no username");

    try {
      const response = await axios.post(shareAPI, {
        username,
        mode: window.location.pathname.split("/").filter(Boolean).pop(),
        score: points,
      });

      console.log(response.data);
      setISLoading(false);
      setusername("");
      hideShareButton();
      back();
    } catch (error) {
      console.error(error);
    }
  };

  const handleBack = () => {
    setISLoading(false);
    back();
  };

  const handleUsernameInput = (e) => {
    setusername(e.target.value);
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
          onChange={(e) => handleUsernameInput(e)}
          maxLength={10}
        />
      </div>
      <div className="share-buttons">
        <button onClick={handleBack}>
          <IoArrowBack />
        </button>
        <button
          className={username.length > 3 ? "able" : "disable"}
          disabled={username.length > 3 ? false : true}
          onClick={handleShare}>
          {isLoading ? <div className="share-spinner"></div> : <TbShare />}
        </button>
      </div>
    </div>
  );
}

export default SharePoints;
