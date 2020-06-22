import React, { useState } from 'react';

function Room() {
  let [isLit, setLit] = useState(true);
  let [age, setAge] = useState(23);

  return (
    <div>
      This room is {isLit ? 'lit' : 'dark'}
      <br />
      <button onClick={() => setLit(!isLit)}>Toggle Light</button>
      <br />
      age: {age}
      <br />
      <button
        onClick={() => {
          console.log('Age increase arrow function');
          setAge(++age);
        }}
      >
        Age Increase
      </button>
      <br />
      <button
        onClick={() => {
          console.log('Age decrease arrow function');
          setAge(--age);
        }}
      >
        Age decrease
      </button>
    </div>
  );
}

export default Room;
