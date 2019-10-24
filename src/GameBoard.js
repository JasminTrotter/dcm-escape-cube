import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/App.css';

function GameBoard({ handleWin, handleRestart }) {
  const [name, updateName] = useState('');
  const [price, updatePrice] = useState('');
  const items = [
    {
      name: 'VaporMax',
      price: '100',
      hint: 'this is a hint'
    },
    {
      name: 'Other',
      price: '0',
      hint: 'this is a hint'
    }
  ];
  const [correctItemIndex] = useState(Math.floor(Math.random() * Math.floor(items.length)))
  console.log('correctItemIndex', correctItemIndex);

  function handleSubmit(e) {
    e.preventDefault();
    const correctItem = items[correctItemIndex];

    if (name) {
      if (name === correctItem.name) {
        console.log('correct answer');
      } else {
        console.log('wrong answer');
      }
    }

    if (price) {
      if (price === correctItem.price) {
        console.log('correct answer');
      } else {
        console.log('wrong answer');
      }
    }

    if (name === correctItem.name && price === correctItem.price) {
      handleWin();
    }

  }


  console.log('name', name, 'price', price);


  return (
    <div className='game-board'>
      <h1>Game Board</h1>


      <form onSubmit={handleSubmit}>
        <label>
          Param1:
          <input type='text' value={name} onChange={e => updateName(e.target.value)} />
        </label>
        <input type='submit' value='Submit' />
      </form>

      <form onSubmit={handleSubmit}>
        <label>
          Param2:
          <input type='text' value={price} onChange={e => updatePrice(e.target.value)} />
        </label>
        <input type='submit' value='Submit' />
      </form>

      <button onClick={handleWin}>Win</button>
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
}

GameBoard.propTypes = {
  handleWin: PropTypes.func,
  handleFail: PropTypes.func
};

export default GameBoard;
