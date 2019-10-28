import React from 'react';
import UrlContainer from './UrlContainer';
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

  const url = `https://marketerz.com/event?a=an%${questionMatchOne ? handleFormatInput(firstUrlParam) : '___________'}&v=${questionMatchTwo ? handleFormatInput(secondUrlParam) : '___________'}&resp=${questionMatchThree ? handleFormatInput(thirdUrlParam) : '___________'}&pr=y`;

  return (
    <UrlContainer url={url}/>
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
