import React from 'react';
import Tamo from './Tamo';
import PropTypes from 'prop-types';
import NoTamos from './NoTamos';


function TamoControl(props) {
  var flex = {
    display: 'flex',
    justifyContent: 'space-between'
  };
  var margin = {
    marginTop: "50px",
    color: "red"
  }

  function TamoListEmpty() {
    console.log(props.tamolist)
    if (props.tamolist.length == 0) {
      return (
        <div style={margin}>
          <NoTamos />
        </div>
      );
    } else {
      return <div style={flex}>
         {props.tamolist.map((tamo) =>
          <Tamo
            name={tamo.name}
            tamo={tamo.tamo}
            key={tamo.id} />
        )}
      </div>
    }
  }
  return (
    <div>
      {TamoListEmpty()}
    </div>
  );
}

TamoControl.propTypes = {
  tamolist: PropTypes.array
};


export default TamoControl;