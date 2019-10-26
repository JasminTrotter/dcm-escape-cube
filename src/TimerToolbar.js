import React from "react";
import PropTypes from 'prop-types';
import { AppBar, Button, Hourglass, Toolbar } from "react95";
import * as image from './img/react95Logo.png';
import { useTimer } from "react-timer-hook";

function TimerToolbar({ expiryTimestamp, handleFail, handleStartIntro }) {
  const { seconds, minutes, start } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      handleFail();
    }
  });

  start();
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
        <Button style={{ fontWeight: 'bold' }} onClick={handleStartIntro}>
          <img style={{
            height: 20,
            marginRight: 2
          }}
            alt='logo'
            src={image}
          />
          Start
        </Button>
        <div style={{ fontSize: 40, display: 'flex', alignItems: 'center' }}>
          <span>{minutes}</span>:<span>{`${seconds < 10 ? 0 : ''}`}{seconds}</span>
          <Hourglass size={30} />
        </div>
      </Toolbar>
    </AppBar>
  );
}


TimerToolbar.propTypes = {
  handleFail: PropTypes.func,
  expiryTimestamp: PropTypes.object
};

export default TimerToolbar;
