import React from 'react';
import SadM from '../assets/img/sadmonster.png';

function SadMonster(){
  var size = {
    height: '200px',
    width: '200px'
  };
  return (
    <div >
      <img src={SadM} style={size}/>
    </div>
  );
}

export default SadMonster;