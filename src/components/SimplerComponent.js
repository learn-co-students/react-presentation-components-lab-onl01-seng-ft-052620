import React from 'react'
import PropTypes from 'prop-types'

function SimplerComponent (props) {

    

    return (
        <div onClick={props.handleClick}>
            I am just happy
        </div>
    )
}


SimplerComponent.propTypes = {

}

export default SimplerComponent



