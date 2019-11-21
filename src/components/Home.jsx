import React from 'react';
import Giphy from '../assets/img/giphy.gif';

function Home(){
  var style = {
    height: '600px',
    marginTop: '30px',
    border: 'solid pink 10px'
  };
  return(
    <div>
      <img style={style} src={Giphy} alt=""/>
    </div>
  );
}

export default Home;