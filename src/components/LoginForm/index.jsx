import React, {useState} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {Button, Form, FormGroup, Label, Input, Col, Badge, Alert} from 'reactstrap';
import './index.scss';

const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const {onSubmit, formLabel, btnColor, btnText, badgeColor, isLogin, history: {push} = {}} = props;
    return (
        <div className='login-form-root'>
            <Col sm={6}>
                <h2><Badge color={badgeColor}>{formLabel}</Badge></h2>
                {
                    error &&
                    <Alert>
                        Incorrect username or password.
                    </Alert>
                }
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    if (typeof onSubmit === 'function' && !isLogin) {
                        onSubmit(email, password);
                    } else {
                        let data = localStorage.getItem(email) || {};
                        data = JSON.parse(data);
                        if (email === data.email && password === data.password) {
                            push('/productListing');
                        } else {
                            setError(true);
                            setTimeout(() => setError(false), 3000);
                        }
                    }
                }}>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input
                            id="email"
                            placeholder="Enter your email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                            id="password"
                            placeholder="Enter your password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </FormGroup>
                    <Button color={btnColor}>{btnText}</Button>
                    {isLogin && <span className='signUpBtn'><Link to="/signup">SignUp ?</Link></span>}
                </Form>
            </Col>
        </div>
    );
}

LoginForm.propTypes = {
    isLogin: PropTypes.bool,
    onSubmit: PropTypes.func
};

LoginForm.defaultProps = {
    formLabel: 'Login Form',
    btnColor: 'primary',
    btnText: 'LOGIN',
    badgeColor: 'primary'
};

export default LoginForm;