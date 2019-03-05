import React from 'react';

function Display(props) {

  return (
    <>
      <h3>Player Stats</h3>
      {props.hits}, {props.fouls}, {props.strikes}
    </>
  );
}

export default Display;
