import React from "react";
import PropTypes from "prop-types";
import "./styles/App.css";
import Url from './Url';

function Success({
  firstUrlParam,
  handleRestart,
  questionMatchOne,
  questionMatchThree,
  questionMatchTwo,
  secondUrlParam,
  thirdUrlParam
}) {
  return (
    <div className="success">
      <h1>Success!</h1>
      <Url
        questionMatchOne={questionMatchOne}
        firstUrlParam={firstUrlParam}
        questionMatchTwo={questionMatchTwo}
        secondUrlParam={secondUrlParam}
        questionMatchThree={questionMatchThree}
        thirdUrlParam={thirdUrlParam} />
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
}

Success.propTypes = {
  firstUrlParam: PropTypes.string,
  handleRestart: PropTypes.func,
  questionMatchOne: PropTypes.bool,
  questionMatchThree: PropTypes.bool,
  questionMatchTwo: PropTypes.bool,
  secondUrlParam: PropTypes.string,
  thirdUrlParam: PropTypes.string
};

export default Success;
