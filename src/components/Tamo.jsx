import React from 'react';
import TamoButtons from 'TamoButtons';
import PropTypes from 'prop-types';

function Tamo(props){
 
    return (
        <div>
            <p> Name: {props.name}</p>
            <TamoButtons/>
            <p> Hunger: {props.hunger}</p>
            <p> Tired: {props.tired}</p>
            <p>Play: {props.play}</p>
        </div>
    );
}

    Tamo.propTypes = {
        name: PropTypes.string,
        hunger: PropTypes.number,
        tired: PropTypes.number,
        play: PropTypes.number
    };

export default Tamo;