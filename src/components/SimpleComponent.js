// Code SimpleComponent Here
import React, { Component } from 'react'

export class SimpleComponent extends Component {
    constructor(){
        super()
        this.state={
            mood: "happy"
        }
    }

    handleClick =() =>{
        let happySad = this.state.mood === "happy" ? "sad" : "happy"
        this.setState({
            mood: happySad
        })

    }
    
    render() {
        return (
            <div onClick ={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}

export default SimpleComponent
