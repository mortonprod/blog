import * as React from 'react';
////Posts should slide in from the bottom then fan out to see posts on topics.
///Each topic composed of a title and picture and a series of stacks. ///Use google material lite.
///route splits into topics.
///TODO:Difference between material lite grid and bootstrap. Material design uses 12/8/4(desktop/tablet/mobile)
///Responsive grid below 4(Desktop)x2(tablet)x1(phone) # of columns.
///Phone row size 4
/// tablet 8 
/// desktop 12
export default class WebDev extends React.Component<{}, {}> {
    render() {
        return (
            <div className="demo-layout-transparent mdl-layout mdl-js-layout">
                <header className="mdl-layout__header mdl-layout__header--transparent">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">Title</span>
                        <div className="mdl-layout-spacer"></div>
                        <nav className="mdl-navigation">
                            <a className="mdl-navigation__link" href="">Link</a>
                            <a className="mdl-navigation__link" href="">Link</a>
                            <a className="mdl-navigation__link" href="">Link</a>
                            <a className="mdl-navigation__link" href="">Link</a>
                        </nav>
                    </div>
                </header>
                <div className="mdl-layout__drawer">
                    <span className="mdl-layout-title">Title</span>
                    <nav className="mdl-navigation">
                        <a className="mdl-navigation__link" href="">Link</a>
                        <a className="mdl-navigation__link" href="">Link</a>
                        <a className="mdl-navigation__link" href="">Link</a>
                        <a className="mdl-navigation__link" href="">Link</a>
                    </nav>
                </div>
                <main className="mdl-layout__content">
                    <div className="content-grid mdl-grid">
                        <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--4-col-phone">
                            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                                <div className="mdl-card__title">
                                    <h2 className="mdl-card__title-text">Welcome</h2>
                                </div>
                                <div className="mdl-card__supporting-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...
                                </div>
                                <div className="mdl-card__actions mdl-card--border">
                                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="">
                                        Get Started
                                    </a>
                                </div>
                                <div className="mdl-card__menu">
                                    <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                                        <i className="material-icons">share</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--4-col-phone">
                            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                                <div className="mdl-card__title">
                                    <h2 className="mdl-card__title-text">Welcome</h2>
                                </div>
                                <div className="mdl-card__supporting-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...
                                </div>
                                <div className="mdl-card__actions mdl-card--border">
                                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="">
                                        Get Started
                                    </a>
                                </div>
                                <div className="mdl-card__menu">
                                    <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                                        <i className="material-icons">share</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--4-col-phone">
                            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                                <div className="mdl-card__title">
                                    <h2 className="mdl-card__title-text">Welcome</h2>
                                </div>
                                <div className="mdl-card__supporting-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...
                                </div>
                                <div className="mdl-card__actions mdl-card--border">
                                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="">
                                        Get Started
                                    </a>
                                </div>
                                <div className="mdl-card__menu">
                                    <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                                        <i className="material-icons">share</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--4-col-phone">
                            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                                <div className="mdl-card__title">
                                    <h2 className="mdl-card__title-text">Welcome</h2>
                                </div>
                                <div className="mdl-card__supporting-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...
                                </div>
                                <div className="mdl-card__actions mdl-card--border">
                                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="">
                                        Get Started
                                    </a>
                                </div>
                                <div className="mdl-card__menu">
                                    <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                                        <i className="material-icons">share</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        );
    }
}
//<div classNameName="container-fluid home">
//    <header classNameName="jumbotron">
//        <h1>
//            Web Dev posts
//        </h1>
//    </header>
//</div>
