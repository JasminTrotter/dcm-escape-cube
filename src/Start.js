import React from "react";
import PropTypes from "prop-types";
import {
        Button,
        Window,
        WindowContent,
        WindowHeader } from "react95";
import "./styles/App.css";

function Start({ handleStartIntro }) {
  return (
    <Window className="start" style={{ width: 400 }}>
      <WindowHeader
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <span>escape-from-dcm.exe</span>
        <Button style={{ marginRight: '-6px', marginTop: '1px' }} size={'sm'} square>
          <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
        </Button>
      </WindowHeader>
      <WindowContent>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Button onClick={handleStartIntro}>Start Game</Button>
      </WindowContent>
    </Window>
  );
}

Start.propTypes = {
  handleStartIntro: PropTypes.func
};

export default Start;
