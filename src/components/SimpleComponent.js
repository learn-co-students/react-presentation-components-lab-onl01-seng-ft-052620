import React from 'react'

class SimpleComponent extends React.Component{
  state = {mood: "happy"}

  handleClick = () => {
    this.setState(state => {
      if (state.mood === "happy"){
        return {mood: "sad"}
      } else if (state.mood === "sad"){
        return {mood: "happy"}
      }
    })
  }

  render(){
    return(<div onClick={this.handleClick}>{this.state.mood}</div>)
  }
}

export default SimpleComponent
