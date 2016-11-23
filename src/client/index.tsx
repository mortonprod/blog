import * as React from 'react';
import * as reactDOM from 'react-dom';
//import Wrapper from './wrapper';
require('velocity-animate');
require('velocity-animate/velocity.ui');
const VelocityComponent = require("velocity-react").VelocityComponent;
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
                <VelocityComponent animation={{ opacity: this.state.run ? 1 : 0 }} duration={500}>
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
