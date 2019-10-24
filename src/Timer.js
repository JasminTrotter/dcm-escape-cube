import React from "react";
import { useTimer } from "react-timer-hook";

function Timer({ expiryTimestamp, handleFail }) {
  const { seconds, minutes, start /*restart*/ } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      console.warn("onExpire called");
      handleFail();
    }
  });

  start();

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "100px" }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      {/* <button
        onClick={() => {
          // Restarts to 5 minutes timer
          var t = new Date();
          t.setSeconds(t.getSeconds() + 300);
          restart(t);
        }}
      >
        restart
      </button> */}
    </div>
  );
}

export default Timer;
