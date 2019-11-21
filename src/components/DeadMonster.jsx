import React from 'react';
import DeadM from '../assets/img/dead.jpg';

function DeadMonster(){
  var size = {
    height: '200px',
    width: '200px'
  };
  return (
    <div>
      <img src={DeadM} style={size}/>
    </div>
  );
}

export default DeadMonster;