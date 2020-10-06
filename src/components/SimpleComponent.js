// Code SimpleComponent Here
import React, {Component} from 'react';

class SimpleComponent extends Component{
    constructor(){
        super()
        this.state = {
            mood: 'happy'
        }
    }

    handleClick = () => {
        this.setState(prevState => {
            return prevState.mood === 'happy' ? {mood: 'sad'} : {mood: 'happy'}
        })
    }

    render(){
        return(
        <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
}
export default SimpleComponent;