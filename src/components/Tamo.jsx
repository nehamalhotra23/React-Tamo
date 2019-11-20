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
  }
  handleIncrementTired(){
    var temp = this.state.tired;
    temp+=1;
    this.setState({tired: temp});

  }
  // incrementHunger(){
  //     var temp = this.state.tired;
  //     temp+=1;
  //     this.setState({tired: temp})

  // }
  // incrementTired(){
  //     var temp = this.state.tired;
  //     temp+=1;
  //     this.setState({tired: temp})

  // }
  render(){
    return(
      <div>
        <p> Name: {this.props.name}</p>
        <TamoButtons onTiredButtonClick={this.handleIncrementTired}/>
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