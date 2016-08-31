/// <reference path="../typings/index.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';
import { Router, RouterContext, match, createMemoryHistory, Route, IndexRoute, browserHistory } from 'react-router'
import Home from "./components/home/home.tsx";
import Nav from "./components/nav/nav.tsx";
import WebDev from "./components/webDev/webDev.tsx";
import MixInMatch from "./components/mixInMatch/mixInMatch.tsx";
import Post1W  from "./components/webDev/post1/post1.tsx";
import Post1M from "./components/mixInMatch/post1/post1.tsx";
import { Main } from './components/templates/Main'
///TODO:How to specify meta data and 
///Render info:
//  1) Main: This is everything shared with web and mixin.
//      >> url(/) will render as index "Home".
//  2) Blogtype(webdev or mixInMatch) >>> This will add shadow dom components for each type of blog
//  3) The add your content. 
export class myRouter{
    static setup1() {
        ReactDOM.render((
            <Router history={browserHistory}>
                <Route path="/" component= {Main} >
                    <IndexRoute component={Home} />
                    <Route path="webdev" component = {WebDev}>
                        <Route path="postOne" component = {Post1W}/>
                    </Route>
                    <Route path="mixandmatch" component = {MixInMatch}>
                        <Route path="postOne" component = {Post1M}/>
                    </Route>
                </Route>
            </Router>
        ), document.getElementById('main'))
    }
}