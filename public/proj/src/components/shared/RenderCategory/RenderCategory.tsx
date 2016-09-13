/// <reference path="../../../../typings/index.d.ts" />
import * as React from 'react'
import globalStore from '../../../global.ts';
interface IRenderCategoryProps { cat: number, post: number };
interface IRenderCategoryState { title: any, content:any };
import './RenderCategory.scss'
///Store list of comment objects to create dynamically: http://stackoverflow.com/questions/32421657/create-react-element-dynamically

export default class RenderCategory extends React.Component<IRenderCategoryProps, IRenderCategoryState> {
    static listOfCategoriesAndInfo :any = []; 
    cat: number;
    post: number;
    constructor(cat: number, post: number = 0, props: IRenderCategoryProps, state: IRenderCategoryState) {
        super();
        this.cat = cat.params.category;
        this.cat = 3;
        this.post = post;
        this.state = { title: "Title here!", content: "Content here!" };
    }
    /// @function RenderCategory.getPosts
    /// Get all posts for a certain category and then resolve promise.
    /// @param postUrl {string} The url for all posts
    /// @param category {number} The category which we want to get all posts
    /// @param resolve {function} Let promise know we got it.
    static getPosts(postUrl: string, cat: number, resolve:any) {
        let url = postUrl + "?categories=" + cat;
        $.get(url, function (result) {
            return result;
        }).then((result) => {
            let category = { id: cat, posts: []};
            for (let i = 0; i < result.length; i++) {
                let title = result[i]["title"]["rendered"];
                let content = result[i]["content"]["rendered"];
                category.posts.push({
                    title: title,
                    content: content
                });
            }
            RenderCategory.listOfCategoriesAndInfo.push(category);
            resolve(category);
        });
    }
    ///TODO:Note the this binding to the class and not to where the function is called inside the promise/then function.
    componentWillMount() {
        let promise = new Promise(function (resolve, reject) {
            let ids: any = [];
            for (let i = 0; i < RenderCategory.listOfCategoriesAndInfo.length; i++) {
                ids.push(RenderCategory.listOfCategoriesAndInfo[i]["id"]);
            }
            if ($.inArray(3, ids) === -1) {
                RenderCategory.getPosts(globalStore.postUrl, 3, resolve)
            } else {
                resolve(RenderCategory.listOfCategoriesAndInfo[$.inArray(3, ids)]);
            }
        }.bind(this));
        promise.then(function (data: any) {
            this.setState({
                title: data.posts[0].title,
                content: data.posts[0].content
            });
        }.bind(this))
    }
    render() {
        return (
            <div className="RenderCategory" >
                < div className= "container-fluid home" >
                    <header className="jumbotron" >
                        <h1>
                            { this.state.title }
                        </h1>
                    </header>
                    <div className= "text" dangerouslySetInnerHTML= {{ __html: this.state.content }} />
                </div>
            </div>
        );
    }
}


