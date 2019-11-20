import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import NewTamoform from './NewTamoform';
import Home from './Home';
import TamoControl from './TamoControl';

class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      MasterList: []
    };
    this.handleNewTamo = this.handleNewTamo.bind(this);
  }
    
  handleNewTamo(newTamo){
    let temp = this.state.MasterList.slice();
    temp.push(newTamo);
    this.setState({MasterList: temp});
  }
    

  render() {
    return (
      <div >
        <Navbar />

        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} ></Route>
            <Route path='/NewTamoform' render={()=><NewTamoform onTamoCreation={this.handleNewTamo} />} ></Route>
            <Route path='/TamoControl' render={()=><TamoControl tamolist={this.state.MasterList}/>}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
