import React from 'react';
import TamoButtons from './TamoButtons';
import PropTypes from 'prop-types';
import HappyAlien from './HappyAlien';
import SadAlien from './SadAlien';
import NormalAlien from './NormalAlien';
import HappyMonster from './HappyMonster';
import GrumpyMonster from './GrumpyMonster';
import SadMonster from './SadMonster';
import DeadAlien from './DeadAlien';
import DeadMonster from './DeadMonster';


class Tamo extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      tired: 10,
      hunger: 10,
      play: 10,
      alive: true,
    };
    this.handleIncrementTired = this.handleIncrementTired.bind(this);
    this.handleIncrementHunger = this.handleIncrementHunger.bind(this);
    this.handleIncrementPlay = this.handleIncrementPlay.bind(this);
  }
  handleIncrementTired() {
    var temp = this.state.tired;
    temp += 1;
    this.setState({ tired: temp });

  }
  handleIncrementHunger() {
    var temp = this.state.hunger;
    temp += 1;
    this.setState({ hunger: temp });

  }
  handleIncrementPlay() {
    var temp = this.state.play;
    temp += 1;
    this.setState({ play: temp });

  }
  componentDidMount() {
    this.decriment = setInterval(() => this.setDecriments(), 900);


  }
  setDecriments() {
    var tempTired = this.state.tired;
    tempTired -= 1;
    var tempHunger = this.state.hunger;
    tempHunger -= 1;
    var tempPlay = this.state.play;
    tempPlay -= 1;
    this.setState({ hunger: tempHunger, tired: tempTired, play: tempPlay });
  }


  componentWillUnMount() {
    clearInterval(this.decriment);
  }

  ConditionalforTimer() {
    console.log(this.props.tamo)
    if (this.state.hunger > 6 && this.state.tired > 6 && this.state.play > 6) {
      return this.props.tamo == 'alien' ? <HappyAlien /> : <HappyMonster />;
    } else if (this.state.hunger > 3 && this.state.tired > 3 && this.state.play > 3) {
      return this.props.tamo == 'alien' ? <NormalAlien /> : <GrumpyMonster />;
    } else if (this.state.hunger > 0 && this.state.tired > 0 && this.state.play > 0) {
      return this.props.tamo == 'alien' ? <SadAlien /> : <SadMonster />;
    } else {
      this.setState({ alive: false });
      console.log(this.state.alive)
      return;
    }
  }


  WarningMessage() {
    var warningMessage = [];
    if (this.state.hunger < 2) {
      warningMessage += ' feed Me';
    }
    if (this.state.play < 2) {
      warningMessage += ' Play With Me';
    }
    if (this.state.tired < 2) {
      warningMessage += ' Give me Energy';
    }
    return warningMessage;
  }
  ConditionalButton() {
    if (this.state.alive === true) {
      return (<div>
        <TamoButtons onTiredButtonClick={this.handleIncrementTired} onHungerButtonClick={this.handleIncrementHunger} onPlayButtonClick={this.handleIncrementPlay} />
        <p>{this.WarningMessage()}</p>
      </div>)

    } else {
      return 'Your alien died!';

    }
  }

  render() {
    
    var content = {
      padding: "40px",
      margin: '20px',
      width: '300px',
      borderRadius: '12px',
      border: 'solid 1px rgba(255, 255, 255, 0.2)',
      webkitBoxShadow:' 4px 5px 5px - 3px #000000',
      boxShadow: '4px 5px 5px - 3px #000000',
      overflow: 'hidden',
      padding: '10px',
    
   }
    return (
      <div className="card"  style={content}>
        {this.state.alive ? this.ConditionalforTimer() : (this.props.tamo == 'alien' ? <DeadAlien /> : <DeadMonster />)}
        <p> Name: {this.props.name}</p>
        <p>tamo: {this.props.tamo}</p>
        {this.ConditionalButton()}
      </div>

    );
  }
}

Tamo.propTypes = {
  name: PropTypes.string,
  tamo: PropTypes.string
};

export default Tamo;