﻿import * as React from 'react';
import * as reactDOM from 'react-dom';
import Wrapper from './wrapper';
interface props {
}
export default class Analysis extends React.Component<props, {}> {
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
    render() {
        return (
            <Wrapper>
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
            </Wrapper>
        );
    }
}


reactDOM.render(
    <Analysis/>,
    document.getElementById("root")
);
