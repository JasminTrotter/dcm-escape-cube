import React from "react";
import PropTypes from 'prop-types';
import Timer from './Timer';
import { AppBar, Button, Toolbar } from "react95";
import * as image from './img/react95Logo.png';

function BottomNav({
  expiryTimestamp,
  gameBoard,
  handleFail,
  handleStartGame,
  handleStartIntro,
  intro,
  startGame
}) {

  return (
    <AppBar
      style={{
        textAlign: 'center',
        top: 'auto',
        bottom: 0
      }}
    >
      <Toolbar
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        {startGame && <Button style={{ fontWeight: 'bold' }} onClick={handleStartIntro}>
          <img style={{
            height: 20,
            marginRight: 2
          }}
            alt='logo'
            src={image}
          />
          Start
        </Button>}
        {intro && <Button style={{ fontWeight: 'bold' }} onClick={handleStartGame}>
          <img style={{
            height: 20,
            marginRight: 2
          }}
            alt='logo'
            src={image}
          />
          Enter the void
        </Button>}
        {gameBoard &&
          <Timer
            expiryTimestamp={expiryTimestamp}
            handleFail={handleFail}
          />
        }
      </Toolbar>
    </AppBar>
  );
}


BottomNav.propTypes = {
  expiryTimestamp: PropTypes.object,
  gameBoard: PropTypes.bool,
  handleFail: PropTypes.func,
  handleStartIntro: PropTypes.func,
  handleStartGame: PropTypes.func,
  intro: PropTypes.bool,
  startGame: PropTypes.bool,
};

export default BottomNav;
