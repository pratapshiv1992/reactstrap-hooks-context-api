import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from "../LoginForm";
import './index.scss';

const SignUpForm = (props) => {
    const {history: {push} = {}} = props;
    return (
        <LoginForm
            onSubmit={(email, password) => {
                const credentials = JSON.stringify({email, password});
                localStorage.setItem(email, credentials);
                push('/');
            }}
            formLabel='Sign Up Form'
            btnColor='success'
            btnText='SIGN UP'
            badgeColor='success'
        />
    );
}

SignUpForm.propTypes = {
    onSignUp: PropTypes.func
};

export default SignUpForm;