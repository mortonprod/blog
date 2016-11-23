import * as React from 'react';
import * as reactDOM from 'react-dom';
//import Wrapper from './wrapper';
const Velocity = require('velocity-animate');
require('velocity-animate/velocity.ui');
const VelocityComponent = require("velocity-react").VelocityComponent;
const VelocityHelpers = require("velocity-react").velocityHelpers;

var Animations = {
  down: VelocityHelpers.registerEffect({
    defaultDuration: 1100,
    calls: [
      [{
        transformOriginX: [ '50%', '50%' ],
        transformOriginY: [ 0, 0 ],
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
        transformOriginX: [ '50%', '50%' ],
        transformOriginY: [ 0, 0 ],
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
        return (
            <div>
                <VelocityComponent animation={this.state.run ? "" : Animations.side}>
                    <div>
                        <h1 className="text-center login-title"> Sign in </h1>
                        <div className="account-wall">
                            <form className='form-signin'>
                                <input ref={(input) => this.email = input} type='text' name='email' className='form-control' placeholder='Email' required/>
                                <input ref={(input) => this.password = input} type='password'  name='password' className='form-control' placeholder='Password' required/>
                                <button onClick={this.submitHandler.bind(this)} className='btn btn-lg btn-primary btn-block'> Sign in </button>
                                <span className="clearfix"/>
                            </form>
                        </div>
                        <a href='/signup'  className='text-center new-account'> Create an account </a>
                    </div>
                </VelocityComponent>
                <button onClick={() => { this.setState({ run: !this.state.run }) } } width={"250px"} height={"250px"}> Start </button>
            </div>
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
