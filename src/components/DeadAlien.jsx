import React from 'react';
import Dead from '../assets/img/dead.png';

function DeadAlien(){
  var size = {
    height: '200px',
    width: '200px'
  };
  return (
    <div>
      <img src={Dead} style={size}/>
    </div>
  );
}

export default DeadAlien;