// Code SimpleComponent Here
import React, { Component } from 'react';

export default class SimpleComponent extends Component {
    state = {
        mood: this.props.mood
    }

    render() {
        return (
    <div onClick={this.handleClick}>{this.props.mood}</div>
        )
    }

    handleClick = () => {
        if (this.props.mood == "happy") {
            this.setState({
                mood: "sad"
        })
        } else if (this.props.mood == "sad") {
            this.setState({
                mood: "happy"
        })
    }
    }
}

SimpleComponent.defaultProps = {
    mood: "happy"
}
