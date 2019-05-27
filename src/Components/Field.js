import React, {useState} from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

const styles = {
    container: {
        position: 'relative',
        margin: {
            top: 5, // jss-plugin-default-unit makes this 5px
            right: 0,
            bottom: 0,
            left: '1rem'
        },
        '& span': {
            fontWeight: 'bold' // jss-plugin-camel-case turns this into 'font-weight'
        }
    },
    label: {
        display: 'inline-block',
        position: 'absolute',
        left: 15,
        top: 16,
        transition: 'all 150ms ease-in',
        color: '#676767'
    },
    input: {
        border: "none",
        appearance: 'none !important',
        borderBottom: "1px solid black",
        boxSizing: "border-box",
        fontFamily:
            "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
        fontSize: "1rem",
        padding: "12px 0 8px 0",
    },
    inputActive: {
        transform: 'translateY(-25px)',
        fontSize: '.9em',
        color: '#000',
        textShadow: '1px 0 0 #fff, -1px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff'
    },
    spanStyles: {
        boxSizing: "border-box",
        fontSize: "1rem",
        left: 0,
        padding: "17px 0 13px 0",
        pointerEvents: "none",
        position: "relative",
        top: 0,
        transition: "font-size 200ms, padding 200ms",
        zIndex: 1,
    },
    floatingStyles: {
        display: 'inline-block',
        position: 'absolute',
        left: 15,
        top: 16,
        transition: 'all 150ms ease-in',
        color: '#676767'
    }
}

const Field = (props) => {
    const {classes, type, label, inputClass, name, value, required, disabled} = props
    const [isFocused, setFocused] = useState()

    const Element = props.element;

    function checkInputClass(inputClass) {
        return inputClass !== undefined
    }

    function handleFocusChange() {
        setFocused(true);
        props.handleFocusChange();
    }

    function handleBlurChange() {
        setFocused(false);
        props.handleBlurChange();
    }

    function onChange() {
        props.onChange();
    }

    return (
        <React.Fragment>
            <div className={!checkInputClass(inputClass) ? classes.container : inputClass.container}>

                <span className={[isFocused && classes.inputActive, classes.floatingStyles].join(" ")}>
                    {label}
                </span>
                <Element
                    autoCapitalize={props.autoCapitalize}
                    autoComplete={props.autoComplete}
                    autoFocus={props.autoFocus}
                    defaultValue={props.value}
                    id={props.id}
                    inputMode={props.inputMode}
                    max={props.max}
                    maxLength={props.maxLength}
                    min={props.min}
                    minLength={props.minLength}
                    onBlur={handleBlurChange}
                    onFocus={handleFocusChange}
                    pattern={props.pattern}
                    readOnly={props.readOnly}
                    spellCheck={props.spellCheck}
                    step={props.step}
                    onChange={onChange}
                    name={name}
                    value={value}
                    className={!checkInputClass(inputClass) ? classes.input : inputClass.input}
                    type={type}
                    required={required}
                    disabled={disabled}
                />
            </div>
        </React.Fragment>
    )
}

Field.propTypes = {
    type: PropTypes.oneOf(["text", "password", "url", "search", "email", "tel"]),
    autoCapitalize: PropTypes.oneOf(["none", "sentences", "words", "characters"]),
    autoComplete: PropTypes.string,
    autoFocus: PropTypes.bool,
    element: PropTypes.oneOf(["input", "textarea"]),
    id: PropTypes.string.isRequired,
    inputMode: PropTypes.string,
    max: PropTypes.number,
    maxLength: PropTypes.number,
    min: PropTypes.number,
    minLength: PropTypes.number,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    pattern: PropTypes.any,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    spellCheck: PropTypes.bool,
    step: PropTypes.number,
    styles: PropTypes.object,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    inputClass: PropTypes.shape({
        container: PropTypes.object,
        label: PropTypes.object,
        input: PropTypes.object
    }),
    label: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool
}

Field.defaultProps = {
    autoFocus: false,
    disabled: false,
    element: "input",
    name: "",
    onBlur: () => {
    },
    onChange: () => {
    },
    onFocus: () => {
    },
    placeholder: "",
    readOnly: false,
    required: false,
    step: 1,
    styles: {},
    type: "text",
    value: ""
};

export default withStyles(styles)(Field)
