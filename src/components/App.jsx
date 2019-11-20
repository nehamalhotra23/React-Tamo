import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import NewTamoform from "./NewTamoform";

function App() {


    return (
        <div >
            <Navbar />

            <div className='container'>
                <Switch>
                    <Route exact path=' /' ></Route>
                    <Route path='/NewTamoform' component={NewTamoform}></Route>
                </Switch>
            </div>
        </div>
    );
}
export default App;
