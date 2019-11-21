import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  var navigation = {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  };
  var logo = {
    paddingLeft: '2%',
    fontFamily: 'Arial',
    fontSize: '30px',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#fff'
  };

  var modelX = {
    textDecoration: 'none',
    padding: '10px',
    color: '#fff',
    fontFamily: 'Arial',
    fontWeight: '900',
    marginLeft: '30vmax',
    marginRight: 'auto',
    '&:hover': {
      textDecoration: 'underline'
    }
  };
  var navDiv = {
    marginRight: '5%'
  };
  return (
    <div style={navigation}>
      <div className="header">
        <nav>
          <div style={navDiv}>
            <Link to="/" style={logo}>TAMO </Link>
            <Link to="/NewTamoform" style={modelX}>CREATE PLAYER</Link>
            <Link to="/TamoControl" style={modelX}>Day Care</Link>
          </div>
        </nav>
      </div>
    </div>

  );
}
export default Navbar;