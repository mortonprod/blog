/// <reference path="../typings/index.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';
import { Router, RouterContext, match, createMemoryHistory, Route, IndexRoute, browserHistory } from 'react-router'
import Home from "./components/home/home.tsx";
import Nav from "./components/nav/nav.tsx";
import WebDev from "./components/webDev/webDev.tsx";
import MixInMatch from "./components/mixInMatch/mixInMatch.tsx";
import T1  from "./components/webDev/topic1/topic1.tsx";
import T1P1 from "./components/webDev/topic1/post1/post1.tsx";
import Post1M from "./components/mixInMatch/post1/post1.tsx";
import { Main } from './components/templates/Main'
///TODO:How to specify meta data and 
///Place first post twice for url finding with and without post1 in url.
///TODO:Note this is going to get the full blog. You need to query the server in the long run.
export class myRouter{
    static setup1() {
        ReactDOM.render((
            <Router history={browserHistory}>
                <Route path="/" >
                    <IndexRoute component={Home} /> // This reached if nothing else given.
                    <Route path="webdev"> //If /webdev then send back webdev or post specified /webdev/firstPost
                        <IndexRoute component={WebDev} />
                        <Route path="topic1" component={T1} >
                            <IndexRoute component={T1P1} />
                            <Route path="post1" component={T1P1} />
                        </Route>
                    </Route>
                </Route>
            </Router>
        ), document.getElementById('main'))
    }
}

