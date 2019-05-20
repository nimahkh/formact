import React from "react"
import PropTypes from 'prop-types';

const Hello=(props)=>{
    const {greetings , classes}=props;
    return (
        <div style={classes}>
            {greetings!==undefined ? greetings:"Hello world"}
        </div>
    )
}

Hello.propTypes={
    classes:PropTypes.object.isRequired,
    greetings:PropTypes.string
}

export default Hello