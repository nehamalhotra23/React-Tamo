import React from 'react';
import TamoButtons from './TamoButtons';
import PropTypes from 'prop-types';

class Tamo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      tired: 10,
      hunger: 10,
      play: 10,
    };
    this.handleIncrementTired=this.handleIncrementTired.bind(this);
    this.handleIncrementHunger=this.handleIncrementHunger.bind(this);
    this.handleIncrementPlay=this.handleIncrementPlay.bind(this);
  }
  handleIncrementTired(){
    var temp = this.state.tired;
    temp+=1;
    this.setState({tired: temp});

  }
  handleIncrementHunger(){
      var temp = this.state.hunger;
      temp+=1;
      this.setState({hunger: temp})

  }
  handleIncrementPlay(){
      var temp = this.state.play;
      temp+=1;
      this.setState({play: temp})

  }
  componentDidMount(){
      this.decriment= setInterval(() => this.setDecriments(),5000);
  }
  setDecriments(){
      console.log("taco");
    var tempTired = this.state.tired;
    tempTired-=1;
    var tempHunger = this.state.hunger;
    tempHunger-=1;
    var tempPlay = this.state.play;
    tempPlay-=1;
    this.setState({hunger: tempHunger, tired: tempTired, play: tempPlay})
  }

//   componentWillUnMount(){
//       clearInterval(this.state.)
//   }
  render(){
    return(
      <div>
        <p> Name: {this.props.name}</p>
        <TamoButtons onTiredButtonClick={this.handleIncrementTired} onHungerButtonClick={this.handleIncrementHunger} onPlayButtonClick={this.handleIncrementPlay}/>
        <p> Hunger: {this.state.hunger}</p>
        <p> Tired: {this.state.tired}</p>
        <p>Play: {this.state.play}</p>
      </div>

    );
  }
}

Tamo.propTypes = {
  name: PropTypes.string,
//   hunger: PropTypes.number,
//   tired: PropTypes.number,
//   play: PropTypes.number
};

export default Tamo;