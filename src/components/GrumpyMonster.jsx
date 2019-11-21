import React from 'react';
import GrumpyM from '../assets/img/grumpymonster.png';

function GrumpyMonster(){ 
  var size = {
    height: '200px',
    width: '200px'
  };
  return (
    <div >
      <img src={GrumpyM} style={size} />
    </div>
  );
}

export default GrumpyMonster;