import React from 'react';

function Display(props) {

  return (
    <>
      <h3>Player Stats</h3>
      <p title='strikes'> Strikes: {props.strikes}</p>
      <p title='balls'> Balls: {props.balls}</p>
    </>
  );
}

export default Display;
