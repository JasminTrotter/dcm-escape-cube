import React from 'react';
import PropTypes from "prop-types";
import win from "../video/win.mp4";
import failed from "../video/fail.mp4";
import firstStage from "../video/first-stage.mp4";
import home from "../video/home.mp4";
import introStory from "../video/intro-story.mp4";
import secondStage from "../video/second-stage.mp4";
import thirdStage from "../video/third-stage.mp4";
import '../styles/BackgroundVideo.css';

function BackgroundVideo({
  fail,
  gameBoard,
  intro,
  questionMatchOne,
  questionMatchTwo,
  startGame,
  success,
}) {
  return (
    <>
      {startGame &&
        <video className="video" loop autoPlay muted>
          <source src={home} type="video/mp4" />
        </video>
      }
      {intro &&
        <video className="video" loop autoPlay muted>
          <source src={introStory} type="video/mp4" />
        </video>
      }
      {(gameBoard && !questionMatchOne) &&
        <video className="video" loop autoPlay muted>
          <source src={thirdStage} type="video/mp4" />
        </video>
      }
      {(gameBoard && questionMatchOne && !questionMatchTwo) &&
        <video className="video" loop autoPlay muted>
          <source src={firstStage} type="video/mp4" />
        </video>
      }
      {(gameBoard && questionMatchTwo) &&
        <video className="video" loop autoPlay muted>
          <source src={secondStage} type="video/mp4" />
        </video>
      }
      {success &&
        <video className="video" loop autoPlay muted>
          <source src={win} type="video/mp4" />
        </video>
      }
      {fail &&
        <video className="video" loop autoPlay muted>
          <source src={failed} type="video/mp4" />
        </video>
      }
    </>
  );
}

BackgroundVideo.propTypes = {
  fail: PropTypes.bool,
  gameBoard: PropTypes.bool,
  intro: PropTypes.bool,
  questionMatchOne: PropTypes.bool,
  questionMatchTwo: PropTypes.bool,
  startGame: PropTypes.bool,
  success: PropTypes.bool,
}

export default BackgroundVideo;
