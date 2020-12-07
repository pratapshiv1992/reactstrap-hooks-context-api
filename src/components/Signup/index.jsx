import React from 'react';
import LoginForm from "../LoginForm";
import './index.scss';

const SignUpForm = (props) => {
    return (
        <LoginForm onSubmit={() => true}/>
    );
}

export default SignUpForm;