
import React from 'react';
import Happy from '../assets/img/happy.jpg'

function HappyAlien() {
    var size = {
        height: "200px",
        width: "200px"
    }
    return (
        <div>
            <img src={Happy} style={size}/>
        </div>
    );
}
export default HappyAlien;