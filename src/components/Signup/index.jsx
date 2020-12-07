import React from 'react';
import LoginForm from "../LoginForm";
import './index.scss';

const SignUpForm = (props) => {
    return (
        <LoginForm
            onSubmit={() => true}
            formLabel='Sign Up Form'
            btnColor='success'
            btnText='SIGN UP'
            badgeColor='success'
        />
    );
}

export default SignUpForm;