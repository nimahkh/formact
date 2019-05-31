import React, {useState} from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

const styles = {
    '@keyframes DrawBorder': {
        from: {borderBottom: '0.5px solid #333'},
        to: {borderBottom: '1px solid #333'}
    },
    container: {
        position: 'relative',
        width: '255px',
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
        minWidth: '200px',
        appearance: 'none !important',
        border: 'unset',
        backgroundColor:'#eee',
        borderBottom: '1px solid #eee',
        boxSizing: "border-box",
        fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
        fontSize: "0.9rem",
        padding: "1rem 0.5rem",
        marginBottom: 10,
        transition :'border-bottom 500ms ease-out',
        '&:focus': {
            borderBottom: [
                [1,'solid','#333'],
            ],
        },
        '&::placeholder':{
            fontSize:"0.7rem"
        }
    },
    unActiveInput: {
        transform: 'translate(0rem ,-0.3rem)',
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
    bootstrapStyles: {
        transform: 'translate(0rem ,-0.3rem)',
        display: 'inline-block',
        position: 'relative',
        color: '#676767',
        fontSize:'0.9rem'
    }
}

const BootstrapField = (props) => {
    const {classes, type, label, inputClass, name, value, required, disabled, placeholder} = props
    const [isFocused, setFocused] = useState()

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

                <label className={classes.bootstrapStyles}>
                    {label}
                </label>
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
                    className={inputClass === undefined ? classes.input : inputClass.input}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                />
            </div>
        </React.Fragment>
    )
}

BootstrapField.propTypes = {
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
        label: PropTypes.object,
        input: PropTypes.object
    }),
    label: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool
}

BootstrapField.defaultProps = {
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
    value: ""
};

export default withStyles(styles)(BootstrapField)
