import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

const styles = {
    container: {
        display: 'inline-block',
        position: 'relative',
        margin: '0 0 10px',
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
            padding: '0px 0px 0px 24px',
            cursor: 'pointer',
            '&:before': {
                content: '""',
                position: 'absolute',
                top: 4,
                left: 0,
                width: 16,
                height: 16,
                backgroundColor: 'transparent',
                border: '2px solid rgba(0, 0, 0, 0.54)',
                borderRadius: 2,
                zIndex: 1,
                transition: 'all 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
                transitionProperty: 'background-color, border-color',
            },
            "&:after": {
                content: '""',
                position: 'absolute',
                top: 5,
                left: 5,
                width: 6,
                height: 12,
                borderBottom: '2px solid transparent',
                borderRight: '2px solid transparent',
                transform: 'rotate(45deg)',
                zIndex: 2,
                transition: 'border-color 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
            }
        }
    },
    checked:{
        '& + label':{
            '&:before': {
                backgroundColor: '#3f51b5',
                borderColor: '#3f51b5'
            },
            '&:after': {
                borderColor: '#fff'
            }
        }
    },
}

const MaterialField = (props) => {
    const {classes, checked,  label, inputClass, name, value, required, disabled} = props

    const [isChecked, setIsChecked] = useState(false)

    function onClick() {
        setIsChecked(!isChecked)
        props.onClick();
    }

    useEffect(()=>{
        if(checked){
            setIsChecked(true)
        }
    },[])

    function handleFocusChange() {
        props.onFocus();
    }

    function onChange(e) {
        props.onChange(e);
    }

    return (
        <React.Fragment>
            <div className={classes.container}
                 onClick={e=> onClick(e)}
            >
                <input
                    id={props.id}
                    onFocus={(e) => handleFocusChange(e)}
                    onChange={e => onChange(e)}
                    name={name}
                    value={value}
                    className={isChecked ? classes.checked : ""}
                    type={"checkbox"}
                    required={required}
                    disabled={disabled}
                    defaultChecked={isChecked}
                />
                <label className={inputClass === undefined ? classes.label : inputClass.label}>
                    {label}
                </label>
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
