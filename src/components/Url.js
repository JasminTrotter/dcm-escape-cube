import React from 'react';
import PropTypes from 'prop-types';

function Url({
  firstUrlParam,
  questionMatchOne,
  questionMatchThree,
  questionMatchTwo,
  secondUrlParam,
  thirdUrlParam
}) {

  function handleFormatInput(input) {
    return input.replace(/\s+/g, '').toLowerCase()
  }

  return (
    <h3>https://marketerz.com/event?a=an%{questionMatchOne ? handleFormatInput(firstUrlParam) : '___________'}&v={questionMatchTwo ? handleFormatInput(secondUrlParam) : '___________'}&resp={questionMatchThree ? handleFormatInput(thirdUrlParam) : '___________'}&pr=y</h3>
  );
}

Url.propTypes = {
  firstUrlParam: PropTypes.string,
  questionMatchOne: PropTypes.bool,
  questionMatchThree: PropTypes.bool,
  questionMatchTwo: PropTypes.bool,
  secondUrlParam: PropTypes.string,
  thirdUrlParam: PropTypes.string
};

export default Url;
