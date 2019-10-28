import React from "react";
import PropTypes from 'prop-types';
import { Hourglass } from "react95";
import { useTimer } from "react-timer-hook";

function Timer({
  expiryTimestamp,
  handleFail,
}) {
  const { seconds, minutes, start } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      handleFail();
    }
  });

  start();

  return (
    <div style={{ fontSize: 40, display: 'flex', alignItems: 'center' }}>
      <span>{minutes}</span>:<span>{`${seconds < 10 ? 0 : ''}`}{seconds}</span>
      <Hourglass size={30} />
    </div>
  );
}


Timer.propTypes = {
  expiryTimestamp: PropTypes.object,
  handleFail: PropTypes.func,
};

export default Timer;
