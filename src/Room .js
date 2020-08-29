import React, { useState } from 'react';
import './Room.css';

function Room() {
  let [isLit, setLit] = useState(true);
  let [temp, settemp] = useState(23);

  return (
    <div className={`room ${isLit ? 'lit' : 'dark'}`}>
      This room is {isLit ? 'lit' : 'dark'}
      <br />
      <button onClick={() => setLit(true)}>Turn On</button>
      <button onClick={() => setLit(false)}>Turn Off</button>
      <br />
      Temperature: {temp}
      <br />
      <button
        onClick={() => {
          console.log('Age increase arrow function');
          settemp(++temp);
        }}
      >
        Increase Temperature
      </button>
      <br />
      <button
        onClick={() => {
          console.log('Age decrease arrow function');
          settemp(--temp);
        }}
      >
        Decrease Temperature
      </button>
    </div>
  );
}

export default Room;
