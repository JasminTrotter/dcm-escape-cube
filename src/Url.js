import React from 'react';
import PropTypes from 'prop-types';

function Url({ questionMatchOne, firstUrlParam, questionMatchTwo, secondUrlParam, questionMatchThree, thirdUrlParam }) {

  function formatInput(input) {
    return input.replace(/\s+/g, '').toLowerCase()
  }

  return (
    <h3>https://marketerz.com/event?a=an%{questionMatchOne ? formatInput(firstUrlParam) : '___________'}&v={questionMatchTwo ? formatInput(secondUrlParam) : '___________'}&resp={questionMatchThree ? formatInput(thirdUrlParam) : '___________'}&pr=y</h3>
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
