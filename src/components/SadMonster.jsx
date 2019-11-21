import React from 'react';
import SadM from '../assets/img/sadmonster.png';

function SadMonster(){
  var size = {
    height: '200px',
    width: '200px'
  };
  return (
    <div style={size}>
      <img src={SadM} />
    </div>
  );
}

export default SadMonster;