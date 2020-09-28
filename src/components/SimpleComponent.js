import React, { Component } from 'react'

export class SimpleComponent extends Component {

  state = {
    mood: "happy"
  }

  handleClick = e => {
    let newMood

    if (this.state.mood === "happy"){
      newMood = "sad"
    } else{
      newMood = "happy"
    }

    this.setState({
      mood: newMood
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
