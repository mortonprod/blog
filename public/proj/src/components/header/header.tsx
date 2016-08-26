/// <reference path="../../../typings/index.d.ts" />
import * as React from "react";
///TODO:Can't use import in index like angular 2 files?????
import { Bulb } from "../shared/bulb/bulb";
import { Arrow } from "../shared/arrow/arrow";

import * as ReactDOM from "react-dom";

interface IHeaderProps { link:string };

///TODO: Important: Classname/idName not class/id in jsx.
export class Header extends React.Component<IHeaderProps, {}> {
    ///TODO:Pass in properties like:
    /// <Header prop1="something" prop2="blah" /> when you ReactDom.render

    ///TODO:Remember jsx expression must have one parent element.
    render() {
        return (
            <div className="header">
                <Bulb/>
                {this.props.children}
                <Arrow direction="down" link={this.props.link} />
            </div>
        );
    }
}
//ReactDOM.render(
//    <Bulb compiler="TypeScript" framework="React" />,
//    document.getElementById("header")
//);