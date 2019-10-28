import React from 'react';
import PropTypes from 'prop-types';
import failTrack from "../audio/failure.mp3";
import gamePlayTrack from "../audio/gameplay.mp3";
import homeTrack from "../audio/intro.mp3";
import introTrack from "../audio/introduction.mp3";
import winTrack from "../audio/win.mp3";

function Audio({
  fail,
  gameBoard,
  intro,
  startGame,
  success,
}) {
  return (
    <div>
      {startGame &&
        <audio
          autoPlay
          loop
          src={homeTrack}>
        </audio>
      }
      {intro &&
        <audio
          autoPlay
          loop
          src={introTrack}>
        </audio>
      }
      {gameBoard &&
        <audio
          autoPlay
          loop
          src={gamePlayTrack}>
        </audio>
      }
      {success &&
        <audio
          autoPlay
          loop
          src={winTrack}>
        </audio>
      }
      {fail &&
        <audio
          autoPlay
          loop
          src={failTrack}>
        </audio>
      }
    </div>
  )
}

Audio.propTypes = {
  fail: PropTypes.bool,
  gameBoard: PropTypes.bool,
  intro: PropTypes.bool,
  startGame: PropTypes.bool,
  success: PropTypes.bool,
}

export default Audio;