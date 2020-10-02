// Code SimpleComponent Here
import React, { Component } from 'react'

export class SimpleComponent extends Component {
  state = {
    mood: 'happy'
  }

  handleClick = () => {
    let changeMood = this.state.mood === 'happy' ? 'sad' : 'happy'
    this.setState({
      mood: changeMood
    })
  }

  

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }
}

export default SimpleComponent
