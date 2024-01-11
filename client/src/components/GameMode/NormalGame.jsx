import React, { useState, useEffect } from "react";
import "./NormalGame.css";
import { useNavigate } from "react-router-dom";
import { TiStarFullOutline } from "react-icons/ti";
import { IoMdHeart } from "react-icons/io";
import { PiShuffleBold } from "react-icons/pi";
import { LuPaintbrush } from "react-icons/lu";
import axios from "axios";
import Backdrop from "../Popups/Backdrop";
import ResultPopUp from "../Popups/ResultPopUp";
import GameOver from "../Popups/GameOver";
import SharePoints from "../Popups/SharePoints";

function NormalGame({ api }) {
  const nav = useNavigate();
  //tanga

  const [origWord, setOrigWord] = useState("");
  const [shuffledWord, setShuffledWord] = useState("");

  const [points, setPoints] = useState(0);
  const [lives, setLives] = useState(3);

  const [answer, setAnswer] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState([]);

  const [showResult, setShowResult] = useState(false);
  const [showGameOver, setShowGameOver] = useState(false);
  const [showSharePoints, setShowSharePoints] = useState(false);

  const [resultDeployer, setResultDeployer] = useState(false);
  const [gameOverDeployer, setGameOverDeployer] = useState(false);
  const [sharePointsDeployer, setSharePointsDeployer] = useState(false);

  const [isShareButtonShow, setIsShowButtonShow] = useState(true);

  const handleAddNewLetter = (letter, index) => {
    if (!selectedIndex.includes(index)) {
      setSelectedIndex((prev) => [...prev, index]);
      setAnswer((prev) => [...prev, letter]);
    }
  };

  const shuffle = (word) => {
    const arryStr = word.split("");
    const arryLength = word.length;
    for (let index = arryLength - 1; index > 0; index--) {
      let ranNumb = Math.floor(Math.random() * (index + 1));
      let temp = arryStr[index];
      arryStr[index] = arryStr[ranNumb];
      arryStr[ranNumb] = temp;
    }
    const toString = arryStr.join("");
    return toString;
  };

  const handleClear = () => {
    setSelectedIndex([]);
    setAnswer([]);
  };

  const handleShuffle = () => {
    setSelectedIndex([]);
    setAnswer([]);
    setShuffledWord(shuffle(origWord));
  };

  const handleSubmit = () => {
    // kompleto dapat answer
    if (origWord.length === answer.length) {
      if (resultDeployer) {
        setShowResult(true);
      } else {
        setResultDeployer(true);
        setShowResult(true);
      }

      if (origWord === answer.join("")) {
        setPoints(points + 10);
      } else {
        setLives(lives - 1);
      }
    }
  };

  const generateWord = async () => {
    try {
      const response = await axios.get(api);
      setOrigWord(response.data[0]);
      setShuffledWord(shuffle(response.data[0]));
      console.log(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNextLevel = () => {
    // reset
    setShowResult(false);
    setAnswer([]);
    setSelectedIndex([]);

    // show gameover if 0 life na
    if (lives === 0) {
      setGameOverDeployer(true);
      setShowGameOver(true);
      return;
    }

    // pag may buhay pa, generate new word
    generateWord();
  };

  const handleRestart = () => {
    setShowGameOver(false);
    setLives(3);
    setPoints(0);
    generateWord();
    setIsShowButtonShow(true);
  };

  const sharePoints = () => {
    setShowGameOver(false);
    setSharePointsDeployer(true);
    setShowSharePoints(true);
  };

  const handleBack = () => {
    setShowGameOver(true);
    setShowSharePoints(false);
  };

  const handleHideShareButton = () => {
    setIsShowButtonShow(false);
  };

  useEffect(() => {
    generateWord();
  }, []);

  return (
    <div className="parent-container">
      {(showResult || showGameOver || showSharePoints) && <Backdrop />}
      {resultDeployer && (
        <ResultPopUp
          state={showResult}
          origWord={origWord}
          answer={answer}
          nextLevel={handleNextLevel}
        />
      )}
      {gameOverDeployer && (
        <GameOver
          state={showGameOver}
          restart={handleRestart}
          score={points}
          sharePoints={sharePoints}
          isShareButtonShow={isShareButtonShow}
        />
      )}
      {sharePointsDeployer && (
        <SharePoints
          state={showSharePoints}
          back={handleBack}
          points={points}
          hideShareButton={handleHideShareButton}
        />
      )}
      <div className="child-container">
        <div className="header">
          <h1 onClick={() => nav("/")}>Wooordle</h1>
          <div className="parentInfo-container">
            <div className="info-container">
              <TiStarFullOutline />
              <p>{points}</p>
            </div>
            <div className="info-container">
              <IoMdHeart />
              <p>{lives}</p>
            </div>
          </div>
        </div>
        <div className="shuffled-container">
          {shuffledWord?.split("").map((letter, index) => (
            <p
              key={index}
              onClick={() => handleAddNewLetter(letter, index)}
              className={
                selectedIndex.includes(index)
                  ? "selected-letter"
                  : "not-selected-letter"
              }>
              {letter}
            </p>
          ))}
        </div>
        <div className="answer-container">
          {answer.map((letter, index) => (
            <p key={index}>{letter}</p>
          ))}
        </div>

        <div className="buttons-container">
          <div className="shared-button">
            <LuPaintbrush onClick={handleClear} />
            <div className="vertical-line"></div>
            <PiShuffleBold onClick={handleShuffle} />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default NormalGame;
