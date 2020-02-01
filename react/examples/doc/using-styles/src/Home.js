import React from 'react';
import { white } from 'ansi-colors';

export const homeStyles = {
  color: 'pink',
  backgroundColor: 'green',
  fontSize: '10px',
};

const Home = () => {
  return <div style={homeStyles}>
    <h1>Hi, I'm the home</h1>
    <div>
      Content
    </div>
    <ul>
      <li>Item</li>
    </ul>
  </div >
};

export default Home;