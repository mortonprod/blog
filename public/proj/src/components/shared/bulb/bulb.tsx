/// <reference path="../../../../typings/index.d.ts" />

///Bulb component. 
///State:
    ///Hover >>> Turn on brighter and put lighting on.

import * as React from "react";

///TODO: Important: Classname not class works for jsx.
///TODO:Img src is defined in image directory relative to index. However if background css then defined with component.
export class Bulb extends React.Component<{}, {}> {
    render() {
        return (
            <div className="bulb">
                <svg viewBox="0 0 100 150" className="first">
                    <polygon stroke="gray" fill="yellow" points="100,0 67,50 90,45 47,100 70,95 0,150 27,110 12,113 50,70 30,73 100,0" />
                </svg>
                <svg viewBox="0 0 100 150" className="second">
                    <polygon stroke="gray" fill="yellow" points="100,0 67,50 90,45 47,100 70,95 0,150 27,110 12,113 50,70 30,73 100,0" />
                </svg>
                <img src="./images/lightBulb.jpg" alt="Light Bulb"/>
            </div>
        );
    }
}