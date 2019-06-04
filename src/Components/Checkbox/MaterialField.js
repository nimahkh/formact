import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

const styles = {
    container: {
        display: 'inline-block',
        position: 'relative',
        margin: '5px 0 0 1rem',
        fontSize: 16,
        '& > input': {
            position: 'absolute',
            top: 4,
            left: 0,
            width: 16,
            height: 16,
            opacity: 0,
            zIndex: 0,
        },
        '& label': {
            display: 'block',
            padding: '4px 30px 0px 0px',
            cursor: 'pointer',
            '&:before': {
                content: '""',
                position: 'absolute',
                top: 4,
                right: 0,
                width: 16,
                height: 16,
                backgroundColor: 'transparent',
                border: '2px solid rgba(0, 0, 0, 0.54)',
                borderRadius: 2,
                zIndex: 1,
                transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                transitionProperty: 'background-color, border-color',
            },
            "&:after": {
                content: '""',
                position: 'absolute',
                top: 8,
                right: 7,
                width: 4,
                height: 8,
                borderBottom: '2px solid transparent',
                borderRight: '2px solid transparent',
                transform: 'rotate(45deg)',
                zIndex: 2,
                transition: 'border-color 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
            }
        }
    },
    checked: {
        '&:before': {
            backgroundColor: 'rgba(0,0,255,1) !important',
            borderColor: 'rgba(0,0,255,1) !important',
        },
        '&:after': {
            borderColor: '#fff !important',
        }
    },
}

const MaterialField = (props) => {
    const {classes, checked, label, inputClass, name, value, required, disabled} = props

    const [isChecked, setIsChecked] = useState(false)

    function onClick() {
        setIsChecked(!isChecked)
        props.onClick();
    }

    useEffect(() => {
        if (checked) {
            setIsChecked(true)
        }
    }, [])

    function handleFocusChange() {
        props.onFocus();
    }

    function onChange(e) {
        props.onChange(e);
    }

    return (
        <React.Fragment>
            <div className={classes.container}
                 onClick={e => onClick(e)}
            >
                <label
                    className={[inputClass === undefined ? classes.label : inputClass.label, isChecked ? classes.checked : ""].join(" ")}>
                    {label}
                </label>

                <input
                    id={props.id}
                    onFocus={(e) => handleFocusChange(e)}
                    onChange={e => onChange(e)}
                    name={name}
                    value={value}
                    type={"checkbox"}
                    required={required}
                    disabled={disabled}
                    defaultChecked={isChecked}
                />

            </div>
        </React.Fragment>
    )
}

MaterialField.propTypes = {
    type: PropTypes.oneOf(["checkbox", "text", "password", "url", "search", "email", "tel"]),
    autoCapitalize: PropTypes.oneOf(["none", "sentences", "words", "characters"]),
    autoComplete: PropTypes.string,
    checked: PropTypes.bool,
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
    onClick: PropTypes.func,
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
    onClick: () => {
        return true
    },
    placeholder: "",
    readOnly: false,
    required: false,
    step: 1,
    styles: {},
    type: "text",
    value: "",
    checked: false,
};

export default withStyles(styles)(MaterialField)
