import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const SignUpPage = () => (
  <div>
    <h1>Sign Up</h1>
    <SignUpForm />
  </div>
);
    
class SignUpForm extends Component {
    constructor(props){
        super(props)
    }

    onSubmit = event => {

    };

    onChange = event => {

    };

    render() {
        return (
            <form onSubmit={this.onSubmit}></form>
        )
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to="/home">Sign Up</Link>
    </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink};


