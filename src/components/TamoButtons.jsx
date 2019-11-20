import React from 'react';


function TamoButtons(props){
  
  return(
    <div>
      <button>Feed Me!</button>
      <button onClick={props.onTiredButtonClick}>Sleep</button>
      <button>Play With Me!</button>
    </div>
  );
}

export default TamoButtons;