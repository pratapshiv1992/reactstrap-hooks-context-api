import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Col, Badge} from 'reactstrap';
import './index.scss'

const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {onSubmit} = props;
    return (
        <div className='login-form-root'>
            <Col sm={6}>
                <h2><Badge color="secondary">Login Form</Badge></h2>
                <Form onSubmit={onSubmit}>
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
                    <Button color='primary'>Submit</Button>
                </Form>
            </Col>
        </div>
    );
}

export default LoginForm;