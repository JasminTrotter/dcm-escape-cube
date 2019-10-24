import React from "react";
import PropTypes from "prop-types";
import "./styles/App.css";

function Start({ handleStartIntro }) {
  return (
    <div className="start">
      <h1>Welcome To The Escape Room</h1>
      <button onClick={handleStartIntro}>Start Game</button>
    </div>
  );
}

Start.propTypes = {
  handleStartIntro: PropTypes.func
};

export default Start;
