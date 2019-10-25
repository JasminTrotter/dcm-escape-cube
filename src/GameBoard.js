import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { productList } from './productList';
import './styles/App.css';
import './styles/GameBoard.css';
import Url from './Url';

function GameBoard({
  firstUrlParam,
  handleWin,
  questionMatchOne,
  questionMatchThree,
  questionMatchTwo,
  secondUrlParam,
  thirdUrlParam,
  updateFirstUrlParam,
  updateQuestionMatchOne,
  updateQuestionMatchThree,
  updateQuestionMatchTwo,
  updateSecondUrlParam,
  updateThirdUrlParam,
  updateInputError,
  inputError
}) {
  const [product] = useState(productList[Math.floor(Math.random() * productList.length)])
  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);

  useEffect(() => {
    firstInput.current.focus();
    if (questionMatchOne) {
      secondInput.current.focus();
    }
    if (questionMatchTwo) {
      thirdInput.current.focus();
    }
  }, [questionMatchOne, questionMatchTwo]);

  function handleSubmit(param) {

    if (param === 'param1' && firstUrlParam === product.name) {
      updateQuestionMatchOne(true);
      updateInputError(false);
    }
    // else {
    //   updateInputError(true);
    // }

    if (param === 'param2' && secondUrlParam === product.random) {
      updateQuestionMatchTwo(true);
      updateInputError(false);
    }
    // else {
    //   updateInputError(true);
    // }

    if (param === 'param3' && thirdUrlParam === product.marketingPartner) {
      updateQuestionMatchThree(true);
      updateInputError(false);
      console.log(firstInput, secondInput, thirdInput);
      handleWin();
    }
    // else {
    //   updateInputError(true);
    // }
  }

  return (
    <div className='game-board'>
      <Url
        questionMatchOne={questionMatchOne}
        firstUrlParam={firstUrlParam}
        questionMatchTwo={questionMatchTwo}
        secondUrlParam={secondUrlParam}
        questionMatchThree={questionMatchThree}
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
            <input className={inputError ? 'input-error' : ''} type='text' ref={firstInput} value={firstUrlParam} onChange={event => updateFirstUrlParam(event.target.value)} />
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
            <input className={inputError ? 'input-error' : ''} type='text' ref={secondInput} value={secondUrlParam} onChange={event => updateSecondUrlParam(event.target.value)} />
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
            <input className={inputError ? 'input-error' : ''} type='text' ref={thirdInput} value={thirdUrlParam} onChange={event => updateThirdUrlParam(event.target.value)} />
          </label>
        </form>
      </div>
    </div>
  );
}

GameBoard.propTypes = {
  handleWin: PropTypes.func
};

export default GameBoard;
