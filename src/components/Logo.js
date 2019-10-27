import React from 'react'
import Icon from "../svg/EscapeFromDcmLogo";
import "../styles/Logo.css"

function Logo() {
  const width = 800;
  const height = width / 2;
  const colorTop = '#ff00aa';
  const colorShadow = '#03fcdf';

  return (
    <div className="logo-div">
      <Icon className="logo-top" width={width} height={height} fill={colorTop} />
      <Icon className="logo-shadow" width={width} height={height} fill={colorShadow} />
    </div>
  );
}

export default Logo;