import React, { useState } from 'react';
import Failure from './Failure';
import GameBoard from './GameBoard';
import Introduction from './Introduction';
import Start from './Start';
import Success from './Success';
import Timer from './Timer';
import './styles/App.css';

export default function App() {
  const [startGame, updateStartStatus] = useState(true);
  const [startTimer, updateTimer] = useState(false);
  const [intro, updateIntroStatus] = useState(false);
  const [gameBoard, updateGameStatus] = useState(false);
  const [success, updateSuccessStatus] = useState(false);
  const [fail, updateFailStatus] = useState(false);
  const t = new Date();
  t.setSeconds(t.getSeconds() + 299.5);

  function handleFail() {
    updateGameStatus(false);
    updateFailStatus(true);
    updateTimer(false);
  }

  function handleRestart() {
    updateStartStatus(true);
    updateSuccessStatus(false);
    updateFailStatus(false);
    updateTimer(false);
  }

  function handleStartGame() {
    updateGameStatus(true);
    updateTimer(true);
    updateIntroStatus(false);
  }

  function handleStartIntro() {
    updateStartStatus(false);
    updateIntroStatus(true);
  }

  function handleWin() {
    updateGameStatus(false);
    updateSuccessStatus(true);
    updateTimer(false);
  }

  return (
    <div className='App'>
      {startTimer && <Timer expiryTimestamp={t} handleFail={handleFail} />}
      {startGame && <Start handleStartIntro={handleStartIntro} />}
      {intro && <Introduction handleStartGame={handleStartGame} />}
      {gameBoard && <GameBoard handleWin={handleWin} handleFail={handleFail} />}
      {success && <Success handleRestart={handleRestart} />}
      {fail && <Failure handleRestart={handleRestart} />}
    </div>
  );
}
