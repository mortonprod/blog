/// <reference path="../../../../typings/index.d.ts" />
///TODO:Need to use:<Link activeStyle={{color:'#53acff'}} to='/'>Home</Link>&nbsp; for active style of link.
///TODO:this.props.params.<element> does not work with typescript.
import * as React from 'react'
interface ITopicProps  { dataUrl: string};
interface ITopicState { data: any };
import './topic1.scss'
export default class Topic1 extends React.Component<ITopicProps, ITopicState> {
    dataUrl = "http://localhost/wordpress/wp-json/wp/v2/posts";
    //dataUrl = "http:mortonprod:975975@localhost/wordpress/2016/09/04/react-and-wordpress/title"
    serverRequest: any;
    ///TODO: Note:This is the get initialstate/props part for react in javascript before typescritp classes.
    constructor(props: ITopicProps, state: ITopicState) {
        super(props);
        ////TODO:Need to render state as something. Since we will only update the state at somepoint in the future
        this.state = {
            data: "something",
        };
    }
    ///TODO:Note you attach ajax request to state so the component is updated automatically.
    componentDidMount() {
        this.serverRequest = $.get(this.dataUrl, function (result: any) {
            console.log("result " + result[0]["content"]["rendered"]);
            this.setState({
                data: result[0]["content"]["rendered"]
            });
        }.bind(this));
    }
    componentWillUnmount() {
        this.serverRequest.abort();
    }
    render() {
        return (
            <div className="topic1">
                <ul className="nav nav-pills nav-justified">
                    <li role="presentation" className="active"><a href="#begin">Beginning</a></li>
                    <li role="presentation"><a href="#middle">Middle</a></li>
                    <li role="presentation"><a href="#end">End</a></li>
                </ul>
                <div className="container-fluid home">
                    <header className="jumbotron">
                        <h1>
                            Post + {this.props.params.post}.
                            Section + {this.props.params.section}.

                        </h1>
                    </header>
                    <div className="text" dangerouslySetInnerHTML={{ __html: this.state.data }} />
                </div>
            </div>

        );
    }
}