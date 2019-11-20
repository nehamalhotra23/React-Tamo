import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import NewTamoform from "./NewTamoform";
import Home from './Home';
import TamoControl from './TamoControl';
function App() {


    return (
        <div >
            <Navbar />

            <div className='container'>
                <Switch>
                    <Route exact path='/' component={Home} ></Route>
                    <Route path='/NewTamoform' component={NewTamoform}></Route>
                    <Route path='/TamoControl' component={TamoControl}></Route>
                </Switch>
            </div>
        </div>
    );
}
export default App;
