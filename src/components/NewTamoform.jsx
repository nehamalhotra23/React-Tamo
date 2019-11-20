import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from "uuid";
  
function NewTamoform(props) {
  let _name = null;
  let _hunger = null;
  let _sleep = null;
  let _play = null;

  function handleSubmission(event) {
    event.preventDefault();
    props.onTamoCreation({name: _name.value, id: v4()});
    console.log(_name.value);
    _name.value = '';
    // _hunger.value = '';
    // _sleep.value = '';
    // _play.value = '';
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmission}>
        <input
          type='text'
          id='name'
          placeholder='name'
          ref={(input) => {_name = input;}}/>
        {/* <input
            type='text'
            id='hunger'
            placeholder='hunger'
            ref={(input) => {_hunger = input;}}/>
          <input
            type='text'
            id='sleep'
            placeholder='sleep'
            ref={(input) => {_sleep = input;}}/>
          <input
            type='text'
            id='sleep'
            placeholder='hunger'
            ref={(input) => {_hunger = input;}}/> */}
        
        <button type='submit'>create player</button>
      </form>
    </div>
  );
}
  
NewTamoform.propTypes = {
  onTamoCreation: PropTypes.func
};
  
export default NewTamoform;