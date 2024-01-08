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

  const [currentPage, setCurrentPage] = useState(1);
  const [listLimit, setListLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(null);

  const [gameMode, setGameMode] = useState("easy");
  const [leaderBoardData, setLeaderBoardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getLeaderBoard = async () => {
    try {
      const leaderboard = await axios.get(
        `${leaderboardAPI}?mode=${gameMode}&listLimit=${listLimit}&currentPage=${currentPage}`
      );
      setLeaderBoardData(leaderboard.data.leaderBoard);
      setTotalPages(leaderboard.data.totalPages);
      setIsLoading(false);
      console.log(leaderboard.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangePage = (boolean) => {
    if (boolean) {
      if (currentPage === totalPages) {
        console.log("nasa last kana");
      } else {
        setCurrentPage(currentPage + 1);
        setIsLoading(true);
      }
    } else {
      if (currentPage === 1) {
        console.log("nasa unang page kana");
      } else {
        setCurrentPage(currentPage - 1);
        setIsLoading(true);
      }
    }
  };

  const handleSelectGameMode = (event) => {
    setGameMode(event.target.value);
    setCurrentPage(1);
    setIsLoading(true);
  };

  useEffect(() => {
    getLeaderBoard();
  }, [gameMode, currentPage]);

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-wrapper">
        <div className="leaderboard-header">
          <IoIosArrowBack onClick={() => nav("/")} />
          <h1>Leaderboard</h1>
        </div>

        <div className="gameMode">
          <label htmlFor="gameMode">Mode :</label>
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

        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <td>Rank</td>
                  <td>Username</td>
                  <td>Score</td>
                </tr>
              </thead>
              <tbody>
                {leaderBoardData &&
                  leaderBoardData.map((data, index) => (
                    <tr key={index}>
                      <td className={`rank${index + 1}`}>
                        {index + 1 < 4 ? <FaCrown /> : index + 1}
                      </td>
                      <td>{data.username}</td>
                      <td>{data.score}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="pagination-buttons">
          <IoIosArrowBack onClick={() => handleChangePage(false)} />
          <p>{currentPage}</p>
          <IoIosArrowForward onClick={() => handleChangePage(true)} />
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
