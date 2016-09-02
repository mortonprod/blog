///Done:Must expand div height so you have position paragraph further down so vertically aligned
import * as React from 'react'
import "./home.scss"
export default class Home extends React.Component<{}, {}> {
    render() {
        return (
            <div className="home">
                <section className="image">
                    <div className="row">
                        <div className="col-md-12 width">
                            <h1>
                                Web Dev and Me
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 width">
                            <h1>
                                A journey into the unknown....
                            </h1>
                        </div>
                    </div>
                    <div className="row gly">
                        <div className="col-md-12">
                            <span className="glyphicon glyphicon-chevron-down"/>
                        </div>
                    </div>
                    <div className="row gly">
                        <div className="col-md-12">
                            <span className="glyphicon glyphicon-chevron-down"/>
                        </div>
                    </div>
                    <div className="row gly">
                        <div className="col-md-12">
                            <span className="glyphicon glyphicon-chevron-down"/>
                        </div>
                    </div>
                </section>

                <article className="row blueToPink">
                    <div className="col-md-6 width">
                        <h1>
                            Learn by doing, then writing
                        </h1>
                    </div>
                    <div className="col-md-6 width">
                        <h4>
                            The best way to learn is just to play about with tools you have.
                            Writing about something is also another good way of retaining information.
                        </h4>
                    </div>
                </article>
                <article className="row yellowToGreen">
                    <div className="col-md-6 width">
                        <h1>
                            Practice right by listening.
                        </h1>
                    </div>
                    <div className="col-md-6 width">
                        <h4>
                            You must also make sure how you practice is correct. 
                            If you keep making the same mistakes then you will never learn.
                            You need to be as open to criticism as possible.
                        </h4>
                    </div>

                </article>
                <article className="row blueToPurple">
                    <div className="col-md-6 width">
                        <h1>
                            Resources for others.
                        </h1>
                    </div>
                    <div className="col-md-6 width">
                        <h4>
                            I have done my fair share of gooogle in my time and found blog post invaluable. 
                            Why not try and give something back. 
                        </h4>
                    </div>
                </article>
                <section className="row blueToPurple">
                    <div className="col-md-12 width cBlack">
                        <hr className="fancy"/>
                        <h1>
                            Tools for you to use.
                        </h1>
                    </div>
                </section>
                <section className="row cBlack">
                    <div className="col-md-12 col-md-4 width">
                        <h1>
                            Sum info from linked needed.
                        </h1>
                    </div>
                    <div className="col-md-12 col-md-4 width">
                        <h1>
                            Comment
                        </h1>
                    </div>
                    <div className="col-md-12 col-md-4 width">
                        <h1>
                            My questions
                        </h1>
                    </div>
                </section>
                <div className="row cBlack">
                    <div className="col-md-12 width">
                        <hr className="fancy"/>
                    </div>
                </div>
            </div>

        )
    }
}