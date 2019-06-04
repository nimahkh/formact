import React from 'react'
import PropTypes from 'prop-types'
import MaterialField from "./MaterialField";

const Index = (props) => {
    const {variant} = props

    return (
        <React.Fragment>
            {variant==="material" && <MaterialField {...props} />}
        </React.Fragment>
    )
}

Index.propTypes = {
    variant:PropTypes.oneOf(["material"])
}

Index.defaultProps = {
    variant:"material2",
};

export default Index
