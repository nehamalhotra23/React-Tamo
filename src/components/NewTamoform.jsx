import React from "react";
import { Link } from 'react-router-dom';


  
  function NewTamoform() {
   return (
    <div  className="row">
      <div  className="form-group col-md-6">
        <form action="">
        <input type="text" placeholder="First Name" className="form-control" /><br />
        <input type="text" placeholder="Last Name" className="form-control" /><br />
        <input type="text" placeholder="Year of joining" className="form-control" /><br />
        <button type="submit" className="btn btn-secondary">Create Account</button><hr />
        </form>
      </div>
    </div>
  );
}


export default NewTamoform;