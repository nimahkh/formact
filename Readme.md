#### Formact is a react form generator component 

#### install 

`
npm i @nimahkh/formact
`

#### How to use 

```
//App.js
import React, {Fragment, useState} from 'react';
import ReactDOM from 'react-dom';
import Field from '../../src';
import FieldStyle from "./FieldStyle";

const App = (props) => {

    const [value, setValue] = useState("");

    function handleChange(e) {
        const inputValue = e.target.value;
        setValue(inputValue)
    }

    return (
        <Fragment>
            <FieldStyle value={value} onChangeProp={(e)=>handleChange(e)}/>
            <Field
                element={"input"}
                type="password"
                label={"password"}
                name="password"
                value={value}
                placeholder="Password"
                variant={"bootstrap"}
            />
            <Field
                element={"input"}
                name="name"
                label={"user name"}
                value={value}
                type="text"
                placeholder="Name"
            />
        </Fragment>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));

```

```
//FieldStyle.js a simple jss override styling example
import Field from "../../src/Components/Field";
import React from "react";
import withStyles from "react-jss"

const styles={
    container:{
        backgroundColor: "#ccc"
    },
    inputStyle: {
        minWidth: '200px',
        minHeight:'40px',
        appearance: 'none !important',
        border: "1px solid blue",
        borderRadius: 5,
        boxSizing: "border-box",
        fontSize: "0.9rem",
        padding: "1rem 0.5rem",
        marginBottom: 10,
        '&:required': {
            border: '1px solid #333'
        },
        '&:hover': {
            border: '1px solid #333'
        }
    }
}

function FieldStyle (props){

    const {classes}=props;

    return(
        <Field
            inputClass={{
                container:classes.container,
                input : classes.inputStyle
            }}
            element={"input"}
            type="email"
            label={"email"}
            placeholder="Enter email"
            onChange={props.onChangeProp}
            name="email"
            value={props.value}
            required={true}
            variant={"material2"}
        />
    )
}

export default withStyles(styles)(FieldStyle)

```

#### features

- jss
- material and none-material styles
- full props control
- full class override 

#### for now

- supporting text and text area
- overriding label and container classes
- two styles group ( material , bootstrap)

#### Road map

- support RTL
- validations 
- checkboxes
- radio boxes
- buttons
- drop downs
- fieldSets
- step forms
