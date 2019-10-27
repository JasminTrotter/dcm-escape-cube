import React, { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { themes } from "react95";
import { productList } from './productList';
import VideoOne from './VideoOne';
import Failure from './Failure';
import GameBoard from './GameBoard';
import Introduction from './Introduction';
import Start from './Start';
import Success from './Success';
import BottomNav from './BottomNav';
import './styles/App.css';

function App() {
  const newProduct = productList[Math.floor(Math.random() * productList.length)]
  const [fail, updateFailStatus] = useState(false);
  const [firstUrlParam, updateFirstUrlParam] = useState('');
  const [gameBoard, updateGameStatus] = useState(false);
  const [inputError, updateInputError] = useState(false);
  const [intro, updateIntroStatus] = useState(false);
  const [product, updateProduct] = useState(newProduct);
  const [questionMatchOne, updateQuestionMatchOne] = useState(false);
  const [questionMatchThree, updateQuestionMatchThree] = useState(false);
  const [questionMatchTwo, updateQuestionMatchTwo] = useState(false);
  const [secondUrlParam, updateSecondUrlParam] = useState('');
  const [startGame, updateStartStatus] = useState(true);
  const [success, updateSuccessStatus] = useState(false);
  const [thirdUrlParam, updateThirdUrlParam] = useState('');
  const t = new Date();

  t.setSeconds(t.getSeconds() + 299.5);

  function handleFail() {
    updateGameStatus(false);
    updateFailStatus(true);
  }

  function handleRestart() {
    updateFailStatus(false);
    updateFirstUrlParam('');
    updateProduct(newProduct);
    updateQuestionMatchOne(false)
    updateQuestionMatchThree(false)
    updateQuestionMatchTwo(false)
    updateSecondUrlParam('');
    updateStartStatus(true);
    updateSuccessStatus(false);
    updateThirdUrlParam('');
  }

  function handleStartGame() {
    updateGameStatus(true);
    updateIntroStatus(false);
  }

  function handleStartIntro() {
    updateIntroStatus(true);
    updateStartStatus(false);
  }

  function handleWin() {
    updateGameStatus(false);
    updateSuccessStatus(true);
  }

  function getInputClassName() {
    return inputError ? 'input-error' : '';
  }

  return (
    <ThemeProvider theme={themes.default}>
      <div className='App'>
        <div className="video-div">
          <VideoOne />
        </div>
        <div
          style={{
            display: 'flex',
            height: `100%`,
            width: `100%`,
            justifyContent: 'center',
            alignItems: 'center',
            flexFlow: 'column nowrap',
          }}
        >
          <BottomNav
            expiryTimestamp={t}
            fail={fail}
            gameBoard={gameBoard}
            handleFail={handleFail}
            handleRestart={handleRestart}
            handleStartGame={handleStartGame}
            handleStartIntro={handleStartIntro}
            intro={intro}
            questionMatchOne={questionMatchOne}
            questionMatchTwo={questionMatchTwo}
            startGame={startGame}
            success={success}
          />
          {startGame && <Start />}
          {intro && <Introduction />}
          {gameBoard && <GameBoard
            firstUrlParam={firstUrlParam}
            getInputClassName={getInputClassName}
            handleFail={handleFail}
            handleWin={handleWin}
            inputError={inputError}
            product={product}
            questionMatchOne={questionMatchOne}
            questionMatchThree={questionMatchThree}
            questionMatchTwo={questionMatchTwo}
            secondUrlParam={secondUrlParam}
            thirdUrlParam={thirdUrlParam}
            updateFirstUrlParam={updateFirstUrlParam}
            updateInputError={updateInputError}
            updateQuestionMatchOne={updateQuestionMatchOne}
            updateQuestionMatchThree={updateQuestionMatchThree}
            updateQuestionMatchTwo={updateQuestionMatchTwo}
            updateSecondUrlParam={updateSecondUrlParam}
            updateThirdUrlParam={updateThirdUrlParam}
          />}
          {success && <Success
            firstUrlParam={firstUrlParam}
            questionMatchOne={questionMatchOne}
            questionMatchThree={questionMatchThree}
            questionMatchTwo={questionMatchTwo}
            secondUrlParam={secondUrlParam}
            thirdUrlParam={thirdUrlParam}
          />}
          {fail && <Failure handleRestart={handleRestart} />}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
