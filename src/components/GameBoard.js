import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Window,
  WindowContent
} from 'react95';
import Url from './Url';
import FormInput from './FormInput';
import GameBoardHeader from './GameBoardHeader';
import '../styles/GameBoard.css';

function GameBoard({
  firstUrlParam,
  handleWin,
  inputError,
  product,
  questionMatchOne,
  questionMatchThree,
  questionMatchTwo,
  secondUrlParam,
  thirdUrlParam,
  updateFirstUrlParam,
  updateInputError,
  updateQuestionMatchOne,
  updateQuestionMatchThree,
  updateQuestionMatchTwo,
  updateSecondUrlParam,
  updateThirdUrlParam,
}) {
  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);

  useEffect(() => {
    firstInput.current.focus();
    if (inputError) {
      setTimeout(function () { updateInputError(false); }, 500);
    }
    if (questionMatchOne) {
      secondInput.current.focus();
    }
    if (questionMatchTwo) {
      thirdInput.current.focus();
    }
  }, [
    inputError,
    questionMatchOne,
    questionMatchTwo,
    updateInputError,
  ]);

  function handleSubmit(param) {
    const firstAnswer = firstUrlParam.toLowerCase();
    const secondAnswer = secondUrlParam.toLowerCase();
    const thirdAnswer = thirdUrlParam.toLowerCase();

    if (param === 'param1') {
      if (firstAnswer === product.name) {
        updateQuestionMatchOne(true);
        updateInputError(false);
      } else {
        updateInputError(true);
      }
    }

    if (param === 'param2') {
      if (secondAnswer === product.random) {
        updateQuestionMatchTwo(true);
        updateInputError(false);
      } else {
        updateInputError(true);
      }
    }


    if (param === 'param3') {
      if (thirdAnswer === product.marketingPartner) {
        updateQuestionMatchThree(true);
        updateInputError(false);
        handleWin();
      } else {
        updateInputError(true);
      }
    }

  }

  return (
    <div className='game-board'>
      <Url
        firstUrlParam={firstUrlParam}
        questionMatchOne={questionMatchOne}
        questionMatchThree={questionMatchThree}
        questionMatchTwo={questionMatchTwo}
        secondUrlParam={secondUrlParam}
        thirdUrlParam={thirdUrlParam}
      />
      <Window
        style={{
          width: 660
        }}
      >
        <GameBoardHeader />
        <WindowContent className={!questionMatchOne ? 'show-form' : 'hide-form'}>
          <h1>1. {product.hint1}</h1>
          <h3>(answer: {product.name})</h3>
          <FormInput
            paramNumber={1}
            handleSubmit={handleSubmit}
            inputRef={firstInput}
            urlParam={firstUrlParam}
            updateUrlFunction={updateFirstUrlParam}
          />
        </WindowContent>
        <WindowContent className={(questionMatchOne && !questionMatchTwo) ? 'show-form' : 'hide-form'}>
          <h1>2. {product.hint2}</h1>
          <h3>(answer: {product.random})</h3>
          <FormInput
            paramNumber={2}
            handleSubmit={handleSubmit}
            inputRef={secondInput}
            urlParam={secondUrlParam}
            updateUrlFunction={updateSecondUrlParam}
          />
        </WindowContent>
        <WindowContent className={questionMatchTwo ? 'show-form' : 'hide-form'}>
          <h1>3. {product.hint3}</h1>
          <h3>(answer: {product.marketingPartner})</h3>
          <FormInput
            paramNumber={3}
            handleSubmit={handleSubmit}
            inputRef={thirdInput}
            urlParam={thirdUrlParam}
            updateUrlFunction={updateThirdUrlParam}
          />
        </WindowContent>
      </Window>
    </div>
  );
}

GameBoard.propTypes = {
  firstUrlParam: PropTypes.string,
  handleWin: PropTypes.func,
  inputError: PropTypes.bool,
  product: PropTypes.object,
  questionMatchOne: PropTypes.bool,
  questionMatchThree: PropTypes.bool,
  questionMatchTwo: PropTypes.bool,
  secondUrlParam: PropTypes.string,
  thirdUrlParam: PropTypes.string,
  updateFirstUrlParam: PropTypes.func,
  updateInputError: PropTypes.func,
  updateQuestionMatchOne: PropTypes.func,
  updateQuestionMatchThree: PropTypes.func,
  updateQuestionMatchTwo: PropTypes.func,
  updateSecondUrlParam: PropTypes.func,
  updateThirdUrlParam: PropTypes.func
};

export default GameBoard;
