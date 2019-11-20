import React from 'react';


function TamoButtons(props){
  
  return(
    <div>
      <button onClick={props.onHungerButtonClick}>Feed Me!</button>
      <button onClick={props.onTiredButtonClick}>Sleep</button>
      <button onClick={props.onPlayButtonClick}>Play With Me!</button>
    </div>
  );
}

export default TamoButtons;