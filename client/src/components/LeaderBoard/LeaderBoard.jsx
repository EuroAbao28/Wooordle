import React from "react";
import "./LeaderBoard.css";
import { TiStarFullOutline } from "react-icons/ti";
import { FaCrown } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function LeaderBoard() {
  return (
    <div className="leaderboard-container">
      <div className="leaderboard-wrapper">
        <div className="leaderboard-header">
          <h1>Leaderboard</h1>
        </div>
        <div className="mode">
          <label htmlFor="gameMode">Mode</label>
          <select name="gameMode">
            <option value="">Easy</option>
            <option value="">Medium</option>
            <option value="">Hard</option>
            <option value="">Blind</option>
            <option value="">Krazzy</option>
            <option value="">Demon</option>
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
            <tr>
              <td>
                <FaCrown className="rank1" />
              </td>
              <td>Orue</td>
              <td>
                1520 <TiStarFullOutline className="star" />
              </td>
            </tr>
            <tr>
              <td>
                <FaCrown className="rank2" />
              </td>
              <td>Orue tanga</td>
              <td>
                1210 <TiStarFullOutline className="star" />
              </td>
            </tr>

            <tr>
              <td>
                <FaCrown className="rank3" />
              </td>
              <td>JOnathan ul </td>
              <td>
                900 <TiStarFullOutline className="star" />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>dwdwd</td>
              <td>
                760 <TiStarFullOutline className="star" />
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>user123</td>
              <td>
                490 <TiStarFullOutline className="star" />
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>GGAKO</td>
              <td>
                120 <TiStarFullOutline className="star" />
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>greendLOG</td>
              <td>
                120 <TiStarFullOutline className="star" />
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>JR.</td>
              <td>
                120 <TiStarFullOutline className="star" />
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>platoMalamig</td>
              <td>
                120 <TiStarFullOutline className="star" />
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>grabeka098</td>
              <td>
                120 <TiStarFullOutline className="star" />
              </td>
            </tr>
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
