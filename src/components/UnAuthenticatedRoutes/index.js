import {Redirect, Route, Switch} from "react-router-dom";
import LoginForm from "../Login";
import SignUpForm from "../Signup";
import React from "react";

const UnAuthenticatedRoutes = () => {
    return <Switch>
        <Route path='/' exact render={(props) => <LoginForm {...props} isLogin={true}/>}/>
        <Route path='/signUp' exact render={(props) => <SignUpForm {...props} />}/>
        <Redirect to="/"/>
    </Switch>
}

export default UnAuthenticatedRoutes;