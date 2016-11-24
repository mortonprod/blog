import * as React from 'react';
import * as reactDOM from 'react-dom';
import BoxAnimation from './boxAnimation';
const Velocity = require('velocity-animate');
require('velocity-animate/velocity.ui');
const VelocityComponent = require("velocity-react").VelocityComponent;
const VelocityHelpers = require("velocity-react").velocityHelpers;

var Animations = {
    down: VelocityHelpers.registerEffect({
        defaultDuration: 1100,
        calls: [
            [{
                transformOriginX: ['50%', '50%'],
                transformOriginY: [0, 0],
                rotateX: [0, 'spring'],
            }, 1, {
                delay: 100,
                easing: 'ease-in',
            }]
        ],
    }),

    up: VelocityHelpers.registerEffect({
        defaultDuration: 200,
        calls: [
            [{
                transformOriginX: ['50%', '50%'],
                transformOriginY: [0, 0],
                rotateX: 160,
            }]
        ],
    }),
    side: VelocityHelpers.registerEffect(
        Velocity.RegisterEffect.packagedEffects['callout.bounce']
    )
};
interface props {
}
interface state {
    run: boolean
}
export default class Analysis extends React.Component<props, state> {
    constructor(props: any) {
        super();
    }
    email: HTMLInputElement;
    password: HTMLInputElement;
    submitHandler() {
        console.log("ctrl " + this.email.value + "  " + this.password.value)
        var form = {
            email: this.email.value,
            password: this.password.value,
        }
    }
    componentWillMount() {
        this.setState({ run: false })
    }


    render() {
        const divStyle = {
            position: 'absolute',
            color: 'blue'
        };
        const h1style = {
            textAlign: 'center'
        }
        let img = (
            <img className="" style={divStyle} src={require("./images/broomCrop.png")}/>
        )
        return (
            <BoxAnimation  chaseComponent = {img}  duration={2000} id={["#title"]}>
                <h1 id="title" className="text-center login-title"> Sign in </h1>
                <div className="account-wall">
                    <form className='form-signin'>
                        <input id="title" ref={(input) => this.email = input} type='text' name='email' className='form-control' placeholder='Email' required/>
                        <input id="title" ref={(input) => this.password = input} type='password'  name='password' className='form-control' placeholder='Password' required/>
                        <button id="title" onClick={this.submitHandler.bind(this)} className='btn btn-lg btn-primary btn-block'> Sign in </button>
                        <span className="clearfix"/>
                    </form>
                </div>
                <div style={h1style}>
                    <a id="title" href='/signup'  className='text-center new-account'> Create an account </a>
                    <h1 id="title" className="text-center login-title"> Sign in </h1>
                    <h1 id="title" className="text-center login-title"> Sign in </h1>
                    <h1 id="title" className="text-center login-title"> Sign in </h1>
                    <h1 id="title" className="text-center login-title"> Sign in </h1>
                    <h1 id="title" className="text-center login-title"> Sign in </h1>
                    <h1 id="title" className="text-center login-title"> Sign in </h1>
                    <h1 id="title" className="text-center login-title"> Sign in </h1>
                    <h1 id="title" className="text-center login-title"> Sign in </h1>
                    <h1 id="title" className="text-center login-title"> Sign in </h1>
                    <h1 id="title" className="text-center login-title"> Sign in </h1>
                    <h1 id="title" className="text-center login-title"> Sign in </h1>
                    <h1 id="title" className="text-center login-title"> Sign in </h1>
                    <h1 id="title" className="text-center login-title"> Sign in </h1>
                    <h1 id="title" className="text-center login-title"> Sign in </h1>
                    <h1 id="title" className="text-center login-title"> Sign in </h1>
                    <h1 id="title" className="text-center login-title"> Sign in </h1>
                    <h1 id="title" className="text-center login-title"> Sign in </h1>
                </div>
            </BoxAnimation>
        );
    }
}


reactDOM.render(
    <Analysis/>,
    document.getElementById("root")
);
//Change the actual styles.
   //             <VelocityComponent animation={{ opacity: this.state.run ? 1 : 0 }} duration={500}>
//Apply different animations depending on state.
//<VelocityComponent animation={this.state.run ? Animations.up : Animations.down}>


///Custom animation:Look like your doing something to element
///General: 
///0) Element appears 
///1) Set of elements given some animation before/after
///2) Some element goes over to element and changes it from before to after. 
///3) Element disappears

///Use cases: Highlight certain points; broom cleaning; Point to things to need to fill out.

///Info to pass: 
/// 1) before / after for element(Just what it looks like) >> Sequence to turn to before/ after
/// 2) The component to animate around the screen.implicit dependency:(Absolute styles [height/width])
/// 3) During is for the element moving. 


//What we get:
//<cleanAnimation imgToChase={<imgToChase>} before={before} after={after} during:{during}>
//    <VelocityComponent animation{animation1}>
//    {imgToChase}
//    </VelocityComponent>
//    <VelocityComponent animation{animation2}>
//    {this.props.children}
//    </VelocityComponent>
//</cleanAnimation>
//
//
//How we use it:
//        <CleanAnimation>
//            <singleDivWithContent>
//        <CleanAnimation>

//Sequence:

//1) Get all node elements of children with h1 etc...
//2) Get location on page. 
//3) Set broom animation to those locations over set durations; t1,t2 ....
//4) Set children animation to change colour at t=0 and back at t=t1.


