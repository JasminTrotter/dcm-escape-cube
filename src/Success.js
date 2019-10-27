import React from "react";
import PropTypes from "prop-types";
import "./styles/Success.css";
import Url from './Url';

function Success({
  firstUrlParam,
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
    </div>
  );
}

Success.propTypes = {
  firstUrlParam: PropTypes.string,
  questionMatchOne: PropTypes.bool,
  questionMatchThree: PropTypes.bool,
  questionMatchTwo: PropTypes.bool,
  secondUrlParam: PropTypes.string,
  thirdUrlParam: PropTypes.string
};

export default Success;
