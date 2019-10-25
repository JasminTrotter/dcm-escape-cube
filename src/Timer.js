import React from "react";
import PropTypes from 'prop-types';
import { AppBar, Button, Hourglass, Toolbar } from "react95";
import { Icon } from 'react95';
import { useTimer } from "react-timer-hook";

function Timer({ expiryTimestamp, handleFail }) {
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
      <Toolbar>
        <Button style={{ fontWeight: 'bold' }}>
          <Icon style={{ marginLeft: -2, marginRight: 4 }} />
          Start
        </Button>
        <div style={{ fontSize: 40, display: 'flex', alignItems: 'center' }}>
          <span>{minutes}</span>:<span>{`${seconds < 10 ? 0 : ''}`}{seconds}</span>
          <Hourglass size={32} />
        </div>
      </Toolbar>
    </AppBar>
  );
}


Timer.propTypes = {
  handleFail: PropTypes.func,
  expiryTimestamp: PropTypes.object
};

export default Timer;
