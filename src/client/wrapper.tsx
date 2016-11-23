/// <reference path="../../typings/index.d.ts" />
import * as React from 'react';
import * as reactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';
import animations from './animations';
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
/**
 * @interface
 * @params{string} run Turn animation on
 * @params{string} name Animation type to run.
 * @params{number} duration The length of animation
 */
interface props {
    run: boolean;
    name: string;
    duration: number;
}
interface state {
}
interface nameAndValue {
    name: string;
    value: string;
}
interface refAndStyles {
    ref: Element;
    styles: Array<nameAndValue>;
}

interface animationReturn {
    run: Function;
    refToStyles: Array<refAndStyles>;
}

export default class Wrapper extends React.Component<props, state> {
    constructor(props: any) {
        super();
    }
    animationComplete: animationReturn = null;
    /**
     * Add new properties to fill the child with. Will not over ride components props above you.
     * 
     */
    componentWillMount() {
        this.setState({
        });

    }
    counter() {
        this.setState({
        });
    }
    componentDidMount() {
        this.animationComplete = animations(this.props.name, this.props.duration, this.myRefs.map(reactDOM.findDOMNode));
        this.setState({
        });
    }
    componentWillReceiveProps(nextProps: props) {
        if (this.animationComplete !== null && this.props.run) {
            console.log("RUN");
            this.animationComplete.run()
        }

    }
    myRefs = [] as Array<Element>;
    setRef(ref: Element) {
        console.log("refs: " + ref)
        this.myRefs.push(ref);
    }
    render() {
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
                </div>
            </div>
        )
    }
}
//<div>
//    <h1>
//        Element rendered to string.
//    </h1>
//    <p>
//        {this.state.properString[this.state.counter]}
//    </p>
//    <h1>
//        Info
//    </h1>
//    <p>
//        {this.state.DOMString[this.state.counter]}
//    </p>
//    <h1>
//        Styles
//    </h1>
//    <div>
//        {styleList}
//    </div>
//</div>
//let styleList = [] as any;
//for (let i = 0; i < this.state.styles.length; i++) {
//    styleList.push(
//        <h4>
//            name: {this.state.styles[i][0]}        value: {this.state.styles[i][1]}
//        </h4>
//    );
//}
