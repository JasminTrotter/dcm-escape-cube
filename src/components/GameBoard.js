import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Url from './Url';
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

    if (param === 'param1') {
      if (firstUrlParam === product.name) {
        updateQuestionMatchOne(true);
        updateInputError(false);
      } else {
        updateInputError(true);
      }
    }

    if (param === 'param2') {
      if (secondUrlParam === product.random) {
        updateQuestionMatchTwo(true);
        updateInputError(false);
      } else {
        updateInputError(true);
      }
    }


    if (param === 'param3') {
      if (thirdUrlParam === product.marketingPartner) {
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

      <div className={!questionMatchOne ? 'show-form' : 'hide-form'}>
        <h1>Hint/Answer = {product.name}</h1>
        <form className='show-form' onSubmit={event => {
          handleSubmit('param1')
          event.preventDefault();
        }}>
          <label>
            1:
            <input type='text' ref={firstInput} value={firstUrlParam} onChange={event => updateFirstUrlParam(event.target.value)} />
          </label>
        </form>
      </div>
      <div className={(questionMatchOne && !questionMatchTwo) ? 'show-form' : 'hide-form'}>
        <h1>Hint/Answer = {product.random}</h1>
        <form onSubmit={event => {
          handleSubmit('param2')
          event.preventDefault();
        }}>
          <label>
            2:
            <input type='text' ref={secondInput} value={secondUrlParam} onChange={event => updateSecondUrlParam(event.target.value)} />
          </label>
        </form>
      </div>
      <div className={questionMatchTwo ? 'show-form' : 'hide-form'}>
        <h1>Hint/Answer = {product.marketingPartner}</h1>
        <form className='show-form' onSubmit={event => {
          handleSubmit('param3')
          event.preventDefault();
        }}>
          <label>
            3:
            <input type='text' ref={thirdInput} value={thirdUrlParam} onChange={event => updateThirdUrlParam(event.target.value)} />
          </label>
        </form>
      </div>
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
