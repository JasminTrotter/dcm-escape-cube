import {
  Button,
  WindowHeader
} from 'react95';
import React from 'react';

const GameBoardHeader = () => (
  <WindowHeader
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    <span>escape_from_dcm.exe</span>
    <Button style={{ marginRight: '-6px', marginTop: '1px' }} size={'sm'} square>
      <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
    </Button>
  </WindowHeader>
);

export default GameBoardHeader;
