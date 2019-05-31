import React from 'react'
import PropTypes from 'prop-types'
import MaterialField from "./MaterialField";
import BootstrapField from "./BootstrapField";

const Index = (props) => {
    const {variant} = props

    return (
        <React.Fragment>
            {variant==="material2" && <MaterialField {...props} />}
            {variant==="bootstrap" && <BootstrapField {...props} />}
        </React.Fragment>
    )
}

Index.propTypes = {
    variant:PropTypes.oneOf(["material2","material","bootstrap"])
}

Index.defaultProps = {
    variant:"material2",
};

export default Index
