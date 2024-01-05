import React, { useEffect, useState } from "react";
import "./LeaderBoard.css";
import axios from "axios";
import { TiStarFullOutline } from "react-icons/ti";
import { FaCrown } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { leaderboardAPI } from "../../APIs/LeaderBoardAPI";

function LeaderBoard() {
  const nav = useNavigate();

  const [gameMode, setGameMode] = useState("easy");
  const [leaderBoardData, setLeaderBoardData] = useState([]);

  const getLeaderBoard = async () => {
    try {
      const leaderboard = await axios.get(`${leaderboardAPI}?mode=${gameMode}`);
      setLeaderBoardData(leaderboard.data);
      console.log(leaderboard.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectGameMode = (event) => {
    setGameMode(event.target.value);
  };

  useEffect(() => {
    getLeaderBoard();
  }, [gameMode]);

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-wrapper">
        <div className="leaderboard-header">
          <IoIosArrowBack onClick={() => nav("/")} />
          <h1>Leaderboard</h1>
        </div>
        <div className="mode">
          <label htmlFor="gameMode">Mode</label>
          <select
            name="gameMode"
            value={gameMode}
            onChange={handleSelectGameMode}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            <option value="blind">Blind</option>
            <option value="random">Random</option>
            <option value="timed">Timed</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderBoardData &&
              leaderBoardData.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.username}</td>
                  <td>
                    {data.score} <TiStarFullOutline className="star" />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="pagination-buttons">
          <IoIosArrowBack />
          <p>3</p>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
