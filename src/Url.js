import React from 'react';
import PropTypes from 'prop-types';

function Url({ questionMatchOne, firstUrlParam, questionMatchTwo, secondUrlParam, questionMatchThree, thirdUrlParam }) {

  return (
    <h3>https://marketerz.com/event?a=an%{questionMatchOne ? firstUrlParam : '___________'}&v={questionMatchTwo ? secondUrlParam : '___________'}&resp={questionMatchThree ? thirdUrlParam : '___________'}&pr=y</h3>
  );
}

Url.propTypes = {
  questionMatchOne: PropTypes.bool,
  firstUrlParam: PropTypes.string,
  questionMatchTwo: PropTypes.bool,
  secondUrlParam: PropTypes.string,
  questionMatchThree: PropTypes.bool,
  thirdUrlParam: PropTypes.string
};

export default Url;
