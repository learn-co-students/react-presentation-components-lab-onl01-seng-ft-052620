import React, { Component } from 'react'

 class SimpleComponent extends Component {

    state = {
        mood: "happy"
    }

    handleClick = () => {
        console.log(this)

        this.state.mood === "happy" ? this.setState({ mood:"sad"}) : this.setState({ mood:"happy"})
    //    if(this.state.mood === "happy"){
    //            this.setState({
    //                mood: "sad"
    //            }) 
    //     }else{
    //         this.setState({
    //             mood: "happy" 
    //     })
    // //     })
    // }
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


