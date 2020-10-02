// Code SimpleComponent Here
import React, { Component } from 'react'
import SimplerComponent from './SimplerComponent'

export class SimpleComponent extends Component {

    state = {
        mood: "happy"
    }

    moodChange = () => {
   if(this.state.mood === "happy") {
          this.setState({
        mood: "sad"
    }) } else {
        this.setState({
            mood: "happy"
    })
}
    }

    handleClick = () => {
    if(this.state.mood === "happy") {
           ":)" } else {  ":("}
      }

 
render() {
        return (
            <div onClick={this.moodChange} >
                {this.state.mood}
            </div>
        )
    }
}

export default SimpleComponent;
