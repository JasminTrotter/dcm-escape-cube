import React from 'react'
import Icon from "./svg/EscapeFromDcmLogo";
import "./styles/Logo.css"

function Logo() {
  const width = 300;
  const fillTop = '#fa2';

  return (
    <div className="logo-div">
      <div className="logo-top">
        <Icon width={width} fill={fillTop} />
      </div>
    </div>
  );
}

export default Logo;