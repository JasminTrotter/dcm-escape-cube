import React from 'react';
import { Window, Select } from 'react95';
import PropTypes from 'prop-types';
import * as image from '../img/netscape-chain.png'

const UrlContainer = ({url}) => (
  <Window style={{
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    margin: 50
  }}>
    <>
      <img style={{
        height: 20,
        marginRight: 2
      }}
        alt='chain'
        src={image}
      />
      <p style={{
        marginRight: 5
      }}
      >Location:   </p>
    </>
    <Select disabled items={[{ value: url, label: url }]} />
  </Window>
);

UrlContainer.propTypes = {
  url: PropTypes.string
};

export default UrlContainer;

