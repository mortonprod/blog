/// <reference path="../../../../typings/index.d.ts" />
import * as React from 'react'
import globalStore from '../../../global.ts';
interface IRenderCategoryState { title: any, content:any };
import './RenderCategory.scss'
///Store list of comment objects to create dynamically: http://stackoverflow.com/questions/32421657/create-react-element-dynamically
///TODO:Note you can not change props!!!!!!!!!!!
export default class RenderCategory extends React.Component<{}, IRenderCategoryState> {
    static listOfCategoriesAndInfo: any = [];
    ///TODO:Note params is using the name given in the url. See the router :category/:post
    post: number;
    cat: number;
    constructor() {
        super();
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
            let category = { id: cat, posts: [] };
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
    componentWillReceiveProps(nextProps: any) {
        this.getNewCategory(nextProps.params.category, nextProps.params.post);
    }
    getNewCategory(category: number, post: any) {
        if (category !== undefined) {
            this.cat = category;
        } else {
            this.cat = 0;
        }
        if (post !== undefined) {
            this.post = post;
        } else {
            this.post = 0;
        }
        this.setState({
            title: "",
            content: ""
        });
        let promise = new Promise(function (resolve: any, reject: any) {
            let ids: any = [];
            for (let i = 0; i < RenderCategory.listOfCategoriesAndInfo.length; i++) {
                ids.push(RenderCategory.listOfCategoriesAndInfo[i]["id"]);
            }
            if ($.inArray(this.cat, ids) === -1) {
                RenderCategory.getPosts(globalStore.postUrl, this.cat, resolve)
            } else {
                resolve(RenderCategory.listOfCategoriesAndInfo[$.inArray(this.cat, ids)]);
            }
        }.bind(this));
        promise.then(function (data: any) {
            this.setState({
                title: data.posts[this.post].title,
                content: data.posts[this.post].content
            });
        }.bind(this))
    }
    ///TODO:Note the this binding to the class and not to where the function is called inside the promise/then function.
    componentWillMount() {
        this.getNewCategory(this.props.params.category,this.props.params.post);
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


