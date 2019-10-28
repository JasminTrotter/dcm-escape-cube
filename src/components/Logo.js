import React from 'react'
import Proptypes from 'prop-types'
import Icon from "../svg/EscapeFromDcmLogo";
import "../styles/Logo.css"

function Logo({
  bottomColor,
  size,
  topColor,
}) {
  const width = size;
  const height = width / 2;
  const colorTop = topColor;
  const colorShadow = bottomColor;

  return (
    <div className="logo-div">
      <Icon className="logo-top" width={width} height={height} fill={colorTop} />
      <Icon className="logo-shadow" width={width} height={height} fill={colorShadow} />
    </div>
  );
}

Logo.propTypes = {
  bottomColor: Proptypes.string,
  size: Proptypes.number,
  topColor: Proptypes.string,
}

export default Logo;
