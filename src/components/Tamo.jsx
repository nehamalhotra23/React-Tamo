import React from 'react';
import TamoButtons from './TamoButtons';
import PropTypes from 'prop-types';

function Tamo(props){
 
  return (
    <div>
      <p> Name: {props.name}</p>
      <TamoButtons/>
      <p> Hunger: </p>
      <p> Tired: </p>
      <p>Play: </p>
    </div>
  );
}

Tamo.propTypes = {
  name: PropTypes.string,
//   hunger: PropTypes.number,
//   tired: PropTypes.number,
//   play: PropTypes.number
};

export default Tamo;