// Code SimpleComponent Here

import React from 'react'


class SimpleComponent extends React.Component {

    state = {
        mood: "happy"
    }


    render () {
        return (
            <div onClick={this.handler}>
                {this.state.mood}
            </div>
        )
    }

    handler = () => {
        if(this.state.mood === "happy"){
            this.setState({mood: "sad"})
        }
        else {
            this.setState({mood: "happy"})
        }

    }

}

export default SimpleComponent