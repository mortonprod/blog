/// <reference path="../../../../typings/index.d.ts" />
import * as React from "react";
///Properties(Input)
interface IArrowProps { direction: string; link: string; }
///State:
///Hover(Css) >>> Make bigger and wiggle.
///Html
///<Arrow direction="down" link="http:....#top"/>

export class Arrow extends React.Component<IArrowProps, {}> {
    arrowType = "arrow";
    ///Props will come from parent on rendering.
    constructor(props: IArrowProps) {
        ///Super will call constructor of base class react.
        ///TODO:Still don't quite get this???
        super(props);
        switch (this.props.direction) {
            case "up": 
                this.arrowType += " glyphicon glyphicon-chevron-up"
                break;
            case "down":
                this.arrowType += " glyphicon glyphicon-chevron-down"
                break;
            case "left":
                this.arrowType += " glyphicon glyphicon-chevron-left"
                break;
            case "right":
                this.arrowType += " glyphicon glyphicon-chevron-right"
                break;
            default:
                throw new TypeError("Direction should be up/down/left/right. Provided: " + props.direction);

        }
    }
    render() {
        return (
            <a className={this.arrowType} href={this.props.link}>here</a>
        );
    }
}