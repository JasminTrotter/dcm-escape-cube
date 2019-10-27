import React from "react";
import PropTypes from "prop-types";
import Url from './Url';
import "../styles/Success.css";

function Success({
  firstUrlParam,
  questionMatchOne,
  questionMatchThree,
  questionMatchTwo,
  secondUrlParam,
  thirdUrlParam,
}) {
  return (
    <div className="success">
      <h1>Success!</h1>
      <Url
        firstUrlParam={firstUrlParam}
        questionMatchOne={questionMatchOne}
        questionMatchThree={questionMatchThree}
        questionMatchTwo={questionMatchTwo}
        secondUrlParam={secondUrlParam}
        thirdUrlParam={thirdUrlParam}
      />
    </div>
  );
}

Success.propTypes = {
  firstUrlParam: PropTypes.string,
  questionMatchOne: PropTypes.bool,
  questionMatchThree: PropTypes.bool,
  questionMatchTwo: PropTypes.bool,
  secondUrlParam: PropTypes.string,
  thirdUrlParam: PropTypes.string,
};

export default Success;
