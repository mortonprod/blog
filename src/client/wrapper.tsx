/// <reference path="../../typings/index.d.ts" />
import * as React from 'react';
import * as reactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';
const Velocity = require('velocity-animate');
//import velocity from "velocity-animate/velocity";
/**
 * A simple wrapper 
 * Get the size of the outermost and animate with velocity.js
 * Start with getting the number of divs and then adding dynamic change to basic grid.
 * Get css framework for colour and style. material design.
 * 
 * props.children is just an array of react elements(Just plain JS). So....
 * 1) Attach function or tag to ref property of element(Virtual DOM) before rendering.
 * 2) Render: This will link the underlying DOM container.
 * 3) window.getComputedStyle(React.findDOMNode(this.refs.element(0..n))).getPropertyValue("height(example)")
   4) Link velocity to the actual DOM elements and change relative to properties got from reference.
 * Basic design:Normal react component or random crazy alternative.
 *
 * 
 */

interface props {
    normal?: boolean;
}
interface state {
    properties: Array<any>;
    properString: Array<String>;
    DOMString: Array<String>;
    styles: Array<Array<Object>>;
    counter: number;
}

export default class Wrapper extends React.Component<props, state> {
    constructor(props: any) {
        super();
    }
    refs = [] as Array<Element>;
    doSomething() { };
    addRef(ref: Element) {
        this.refs.push(ref);
    }
    /**
     * Add new properties to fill the child with. Will not over ride components props above you.
     * 
     */
    componentWillMount() {
        this.setState({
            properties: [],
            properString: [],
            DOMString: [],
            styles: [],
            counter: 0
        });

    }
    counter() {
        this.setState({
            properties: this.state.properties,
            properString: this.state.properString,
            DOMString: this.state.DOMString,
            styles: this.state.styles,
            counter: this.state.counter + 1
        });
    }
    componentDidMount() {
        let temp = [] as any;
        let styles = [] as any;
        for (let i = 0; i < this.myRefs.length; i++) {
            temp.push("DOM element: " + this.myRefs[i].nodeName + " Height:  " + window.getComputedStyle(reactDOM.findDOMNode(this.myRefs[i])).getPropertyValue("height"));
            let info = window.getComputedStyle(reactDOM.findDOMNode(this.myRefs[i]));
            Velocity(reactDOM.findDOMNode(this.myRefs[i]), { opacity: 0.0 }, { duration: 1000 });
            Velocity(reactDOM.findDOMNode(this.myRefs[i]), { opacity: 1.0 }, { duration: 1000, loop: true });
            for (let j = 0; j < info.length; j++) {
                let propName = info.item(j);
                let propValue = info.getPropertyValue(propName);
                let pair = [propName, propValue];
                styles.push(pair);
                if (propName === "height") {
                    let val = propValue.slice(0,-2); //get rid  of px
                    console.log("val: "  + val )
                    Velocity(reactDOM.findDOMNode(this.myRefs[i]), { height:50 + val  }, { duration: 10000 });
                }
                if (propName === "width") {
                    let val = propValue.slice(0, -2); //get rid  of px
                    console.log("val: " + val)
                    Velocity(reactDOM.findDOMNode(this.myRefs[i]), { height: 50 + val }, { duration: 10000 });
                }
                if (propName === "left") {
                    let val = propValue.slice(0, -2); //get rid  of px
                    console.log("val: " + val)
                    Velocity(reactDOM.findDOMNode(this.myRefs[i]), { height: 50 + val }, { duration: 10000 });
                }


            }
        }

        this.setState({
            properties: null,
            properString: [""],
            DOMString: temp,
            styles,
            counter: 0
        });
    }
    myRefs = [] as Array<Element>;
    setRef(ref: Element) {
        console.log("refs: " + ref)
        this.myRefs.push(ref);
    }
    render() {
        let styleList = [] as any;
        for (let i = 0; i < this.state.styles.length; i++) {
            styleList.push(
                <h4>
                    name: {this.state.styles[i][0]}        value: {this.state.styles[i][1]}
                </h4>
            );
        }
        const updateChildren = (
            <div>
                {React.Children.map(this.props.children, (element: any, idx: any) => {
                    return React.cloneElement(element, { ref: (ref) => { this.setRef(ref) } });
                })}
            </div>
        );
        return (
            <div>
                <h1>The App Under Test!!! </h1>
                <div>
                    {updateChildren}
                    <div>
                        <button onClick={() => { this.counter() } } width={"250px"} height={"250px"}> Element: {this.state.counter} </button>
                    </div>
                </div>
                <div>
                    <h1>
                        Element rendered to string.
                    </h1>
                    <p>
                        {this.state.properString[this.state.counter]}
                    </p>
                    <h1>
                        Info
                    </h1>
                    <p>
                        {this.state.DOMString[this.state.counter]}
                    </p>
                    <h1>
                        Styles
                    </h1>
                    <div>
                        {styleList}
                    </div>
                </div>
            </div>
        )
    }
}