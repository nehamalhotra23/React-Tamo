import React from 'react';
import HappyM from '../assets/img/happymonster.png';

function HappyMonster(){
  var size = {
    height: '200px',
    width: '200px'
  };
  return (
    <div>
      <img src={HappyM}  style={size}/>
    </div>
  );
}

export default HappyMonster;