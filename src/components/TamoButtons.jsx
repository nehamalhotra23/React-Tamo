import React from 'react';


function TamoButtons(props){
  var flexButtonStyle={
    display: 'flex',
    justifyContent: 'space-between'
  }
  return(
    <div style={flexButtonStyle}>
      <button className='btn' onClick={props.onHungerButtonClick}>Feed!</button>
      <button className='btn' onClick={props.onTiredButtonClick}>Sleep!</button>
      <button className='btn' onClick={props.onPlayButtonClick}>Play!</button>
    </div>
  );
}

export default TamoButtons;