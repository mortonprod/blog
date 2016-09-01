/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react'
//import { SplitButton, MenuItem } from 'react-bootstrap';
import { Header} from '../header/header.tsx'
import Helmet from "react-helmet";
///TODO:You can css module build using the name of the className Main__
import "./main.scss"
///TODO:Using head to place meta/title in head for each component.
///TODO:Main container contains the bootstrap responsive grid. 

///TODO: Note: You move nav bar to bottom of screen. Nice and simple responsive design.
///However you must still consider if the design makes sense.
export class Main extends React.Component<{}, {}> {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-10 ">
                            {this.props.children}
                    </div>
                    <div className="col-sm-12 col-md-2 ">
                        <p>
                            Nav
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
