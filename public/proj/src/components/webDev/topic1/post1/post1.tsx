import * as React from 'react'

export default class Post1 extends React.Component<{}, {}> {
    render() {
        return (
            <div className="container-fluid home">
                <header className="jumbotron">
                    <h1>
                        Building this site
                    </h1>
                    <p> {this.props.postTitle} </p>
                </header>
                {this.props.children}
            </div>

        );
    }
}