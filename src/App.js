import React, { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { themes } from "react95";
import * as image from './img/blue-tubes.JPG'
import Failure from './Failure';
import GameBoard from './GameBoard';
import Introduction from './Introduction';
import Start from './Start';
import Success from './Success';
import Timer from './Timer';
import './styles/App.css';

function App() {
  const [startGame, updateStartStatus] = useState(true);
  const [startTimer, updateTimer] = useState(true);
  const [intro, updateIntroStatus] = useState(false);
  const [gameBoard, updateGameStatus] = useState(false);
  const [success, updateSuccessStatus] = useState(false);
  const [fail, updateFailStatus] = useState(false);
  const [firstUrlParam, updateFirstUrlParam] = useState('');
  const [secondUrlParam, updateSecondUrlParam] = useState('');
  const [thirdUrlParam, updateThirdUrlParam] = useState('');
  const [questionMatchOne, updateQuestionMatchOne] = useState(false);
  const [questionMatchTwo, updateQuestionMatchTwo] = useState(false);
  const [questionMatchThree, updateQuestionMatchThree] = useState(false);
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
    updateFirstUrlParam('');
    updateSecondUrlParam('');
    updateThirdUrlParam('');
    updateQuestionMatchOne(false)
    updateQuestionMatchTwo(false)
    updateQuestionMatchThree(false)
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
    <ThemeProvider theme={themes.default}>
      <div className='App'
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: `100vh`
        }}
      >
        <div
          style={{
            display: 'flex',
            height: `100%`,
            width: `100%`,
            justifyContent: 'center',
            alignItems: 'center',
            flexFlow: 'column nowrap'
          }}
        >
          {startTimer && <Timer expiryTimestamp={t} handleFail={handleFail} />}
          {startGame && <Start handleStartIntro={handleStartIntro} />}
          {intro && <Introduction handleStartGame={handleStartGame} />}
          {gameBoard && <GameBoard
            firstUrlParam={firstUrlParam}
            handleFail={handleFail}
            handleWin={handleWin}
            questionMatchOne={questionMatchOne}
            questionMatchThree={questionMatchThree}
            questionMatchTwo={questionMatchTwo}
            secondUrlParam={secondUrlParam}
            thirdUrlParam={thirdUrlParam}
            updateFirstUrlParam={updateFirstUrlParam}
            updateQuestionMatchOne={updateQuestionMatchOne}
            updateQuestionMatchThree={updateQuestionMatchThree}
            updateQuestionMatchTwo={updateQuestionMatchTwo}
            updateSecondUrlParam={updateSecondUrlParam}
            updateThirdUrlParam={updateThirdUrlParam}
          />}
          {success && <Success
            firstUrlParam={firstUrlParam}
            questionMatchThree={questionMatchThree}
            questionMatchTwo={questionMatchTwo}
            secondUrlParam={secondUrlParam}
            thirdUrlParam={thirdUrlParam}
            handleRestart={handleRestart}
            questionMatchOne={questionMatchOne}
          />}
          {fail && <Failure handleRestart={handleRestart} />}

        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
