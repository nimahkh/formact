import React from "react"
import HelloWorld from '../src/index';
import {render} from 'react-testing-library';
import 'jest-dom/extend-expect'

describe('Helloworld Component', () => {
  test("check props",()=>{
    const classes={};
    const {container} = render(
        <HelloWorld classes={classes}/>,
    );
    expect(container).toHaveTextContent("Hello world")
  })

  test("change props",()=>{
    const classes={};
    const greetings="Hello IRC";
    const {container} = render(
        <HelloWorld classes={classes} greetings={greetings}/>,
    );
    expect(container).toHaveTextContent(greetings)
  })
});
