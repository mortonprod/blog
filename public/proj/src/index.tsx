/// <reference path="../typings/index.d.ts" />
///TODO:IMPORTANT:Remember that typescript will look in node_module folder if ABSOLUTE PATH given.
import * as React from "react";
import * as ReactDOM from "react-dom";
//require("!style!css!sass!./components/bulb/bulb.scss");
///TODO:WARNING IMAGE IN CSS USES FIRST IMPORT LOCATION FOR URL. So can not make module like typescipt.
import './stylesheet/reset.scss'
import './components/header/header.scss'
import './components/shared/bulb/bulb.scss'
import './components/shared/arrow/arrow.scss'
///TODO:AMD imports do not work with typescript imports(systemjs). Need to include:    "allowSyntheticDefaultImports": true in tsconfig
import $ from 'jquery';
import 'bootstrap-sass';
import { Header } from "./components/header/header";
//import './components/header/nature.jpg';
//console.log(styles);
///TODO:Concept:Remember this.prop.children will place the view dom into the shadow dom rendered by react. 
///Will render Header as DOM object composed of div parent with data-reactroot class=header
ReactDOM.render(
    (
        <Header link="default">
            <h1>
                React and Blogging.
            </h1>
            <p>A journey throughsss... An studd... and more studd..</p>
        </Header>
    ),
    document.getElementById("header")
);