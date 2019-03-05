import React from 'react';

function Display(props) {

  return (
    <>
      <h3>Player Stats</h3>
     Balls: {props.balls}, Strikes: {props.strikes}
    </>
  );
}

export default Display;
