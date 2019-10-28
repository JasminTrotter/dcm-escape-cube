import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../styles/ErrorBox.css';

function ErrorBox() {
  const props = useSpring({ config: { duration: 100 }, opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div className="error-div" style={props}>
      <h1>WRONG ANSWER</h1>
    </animated.div>
  )
}

export default ErrorBox;