import React from "react";
import PropTypes from 'prop-types';
import Timer from './Timer';
import { AppBar, Button, Toolbar } from "react95";
import * as image from '../img/react95Logo.png';

function BottomNav({
  expiryTimestamp,
  fail,
  gameBoard,
  handleFail,
  handleRestart,
  handleStartGame,
  handleStartIntro,
  intro,
  questionMatchOne,
  questionMatchTwo,
  success,
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
          <>
            {!questionMatchOne && <Button style={{ fontWeight: 'bold' }} onClick={handleStartGame}>
              <img style={{
                height: 20,
                marginRight: 2
              }}
                alt='logo'
                src={image}
              />
              Hint 1
            </Button>}
            {(questionMatchOne && !questionMatchTwo) && <Button style={{ fontWeight: 'bold' }} onClick={handleStartGame}>
              <img style={{
                height: 20,
                marginRight: 2
              }}
                alt='logo'
                src={image}
              />
              Hint 2
            </Button>}
            {questionMatchTwo && <Button style={{ fontWeight: 'bold' }} onClick={handleStartGame}>
              <img style={{
                height: 20,
                marginRight: 2
              }}
                alt='logo'
                src={image}
              />
              Hint 3
            </Button>}
            <Timer
              expiryTimestamp={expiryTimestamp}
              handleFail={handleFail}
            />
          </>
        }
        {(success || fail) && <Button style={{ fontWeight: 'bold' }} onClick={handleRestart}>
          <img style={{
            height: 20,
            marginRight: 2
          }}
            alt='logo'
            src={image}
          />
          Reset
        </Button>}
      </Toolbar>
    </AppBar>
  );
}


BottomNav.propTypes = {
  expiryTimestamp: PropTypes.object,
  fail: PropTypes.bool,
  gameBoard: PropTypes.bool,
  handleFail: PropTypes.func,
  handleRestart: PropTypes.func,
  handleStartIntro: PropTypes.func,
  handleStartGame: PropTypes.func,
  intro: PropTypes.bool,
  questionMatchOne: PropTypes.bool,
  questionMatchTwo: PropTypes.bool,
  success: PropTypes.bool,
  startGame: PropTypes.bool,
};

export default BottomNav;
