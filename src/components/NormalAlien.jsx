import React from 'react';
import Grumpy from '../assets/img/grumpy.png';

function GrumpyAlien() {
  var size = {
    height: '200px',
    width: '200px'
  };
  return (
    <div>
      <img src={Grumpy} style={size}/>
    </div>
  );
}
export default GrumpyAlien;