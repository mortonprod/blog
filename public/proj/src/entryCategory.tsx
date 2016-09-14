/// <reference path="../typings/index.d.ts" />
import * as React from 'react';
import { Router,Route, IndexRoute, browserHistory, hashHistory } from 'react-router'
import * as ReactDOM from 'react-dom';
import RenderCategory from "./components/shared/RenderCategory/RenderCategory.tsx"

//ReactDOM.render((
//    <Router history={browserHistory}>
//        <Route path=":category" component={RenderCategory}/> ///Render category and give first post.
//        <Route path=":category/:post" component={RenderCategory}/> ///Render category and give any post.
//    </Router>
//), document.getElementById('main'))
console.log("Inside router")
ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" >
            <Route path="category">
                <Route path=":category" component={RenderCategory}/> ///Render category and give first post.
                <Route path=":category/:post" component={RenderCategory}/> ///Render category and give any post.
            </Route>
        </Route>
    </Router>
), document.getElementById('main'))

