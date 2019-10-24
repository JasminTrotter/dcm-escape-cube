import React from "react";
import PropTypes from "prop-types";
import "./styles/App.css";

function Introduction({ handleStartGame }) {
  return (
    <div className="introduction">
      <h1>Intro Page</h1>
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
}

Introduction.propTypes = {
  handleStartGame: PropTypes.func
};

export default Introduction;
