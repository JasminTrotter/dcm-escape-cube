import React from "react";
import PropTypes from 'prop-types';
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
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "100px" }}>
        <span>{minutes}</span>:<span>{`${seconds < 10 ? 0 : ''}`}{seconds}</span>
      </div>
    </div>
  );
}


Timer.propTypes = {
  handleFail: PropTypes.func,
  expiryTimestamp: PropTypes.object
};

export default Timer;
