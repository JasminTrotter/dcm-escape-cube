import React from "react";
import PropTypes from "prop-types";
import "./styles/App.css";

function Failure({ handleRestart }) {
  return (
    <div className="failure">
      <h1>Failure</h1>
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
}

Failure.propTypes = {
  handleRestart: PropTypes.func
};

export default Failure;
