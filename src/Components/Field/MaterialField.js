import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

const styles = {
    container: {
        position: 'relative',
        width: '255px',
        margin: {
            top: 5,
            right: 0,
            bottom: 0,
            left: '1rem'
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
        minWidth: '200px',
        appearance: 'none !important',
        border: "1px solid blue",
        borderRadius: 5,
        boxSizing: "border-box",
        fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
        fontSize: "0.9rem",
        padding: "1rem 0.5rem",
        marginBottom: 10,
        '&:required': {
            border: '1px solid #333'
        },
        '&:hover': {
            border: '1px solid #333'
        }
    },
    inputActive: {
        transform: 'translate(-.7rem, -0.9rem) scale(0.9)',
        fontSize: '.7em',
        color: '#333',
        textShadow: '1px 0 0 #fff, -1px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff'
    },
    unActiveInput: {
        transform: 'translate(0px ,0px)',
        fontSize: '0.8em',
        color: '#333',
        textShadow: '1px 0 0 #fff, -1px 0 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff'
    },
    spanStyles: {
        boxSizing: "border-box",
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
        color: '#676767',
    },
    spanLabel: {
        fontWeight: 'bold'
    }
}

const MaterialField = (props) => {
    const {classes, type, label, inputClass, name, value, required, disabled} = props

    const [isFocused, setFocused] = useState()

    useEffect(()=>{
        if(inputClass !==undefined){
            console.log(inputClass.input);
        }
    })

    const Element = props.element;

    function handleFocusChange() {
        setFocused(true);
        props.onFocus();
    }

    function handleBlurChange() {
        setFocused(false);
        props.onBlur();
    }

    function onChange(e) {
        props.onChange(e);
    }

    return (
        <React.Fragment>

            <div className={inputClass === undefined ? classes.container : inputClass.container}>

                <span
                    className={[(isFocused || value !== "") ? classes.inputActive : classes.unActiveInput, classes.spanLabel, classes.floatingStyles].join(" ")}>
                    {label}
                </span>
                <Element
                    autoCapitalize={props.autoCapitalize}
                    autoComplete={props.autoComplete}
                    autoFocus={props.autoFocus}
                    id={props.id}
                    inputMode={props.inputMode}
                    max={props.max}
                    maxLength={props.maxLength}
                    min={props.min}
                    minLength={props.minLength}
                    onBlur={(e) => handleBlurChange(e)}
                    onFocus={(e) => handleFocusChange(e)}
                    pattern={props.pattern}
                    readOnly={props.readOnly}
                    spellCheck={props.spellCheck}
                    step={props.step}
                    onChange={e => onChange(e)}
                    name={name}
                    value={value}
                    className={
                        inputClass === undefined ?
                            classes.input :
                            inputClass.input === undefined ?classes.input: inputClass.input}
                    type={type}
                    required={required}
                    disabled={disabled}
                />
            </div>
        </React.Fragment>
    )
}

MaterialField.propTypes = {
    type: PropTypes.oneOf(["text", "password", "url", "search", "email", "tel"]),
    autoCapitalize: PropTypes.oneOf(["none", "sentences", "words", "characters"]),
    autoComplete: PropTypes.string,
    autoFocus: PropTypes.bool,
    element: PropTypes.oneOf(["input", "textarea"]),
    id: PropTypes.string,
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
        input: PropTypes.object
    }),
    label: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool
}

MaterialField.defaultProps = {
    autoFocus: false,
    disabled: false,
    element: "input",
    name: "",
    onBlur: () => {
        return true
    },
    onChange: () => {
        return true
    },
    onFocus: () => {
        return true
    },
    placeholder: "",
    readOnly: false,
    required: false,
    step: 1,
    styles: {},
    type: "text",
    value: "",
};

export default withStyles(styles)(MaterialField)
