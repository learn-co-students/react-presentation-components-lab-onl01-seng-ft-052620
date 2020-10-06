import React, { Component } from 'react'

export class SimpleComponent extends Component {
    constructor() {
        super()

        this.state = {
            mood: "happy"
        }
    }
    

    handleClcik = () => {
        this.setState({
            mood: "sad"
        })
    }

    render() {
        return (
            <div onClick={this.handleClcik} >
                {this.state.mood}
            </div>
        )
    }
}

export default SimpleComponent
