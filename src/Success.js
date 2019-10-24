import React from "react";
import PropTypes from "prop-types";
import "./styles/App.css";

function Success({ handleRestart }) {
  return (
    <div className="success">
      <h1>Success</h1>
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
}

Success.propTypes = {
  handleRestart: PropTypes.func
};

export default Success;
