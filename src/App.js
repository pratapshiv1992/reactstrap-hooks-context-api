import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/Signup";
import ProductListing from "./components/ProductListing";

const App = (props) => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact render={(props) => <LoginForm {...props} isLogin={true}/>}/>
                <Route path='/signUp' exact render={(props) => <SignUpForm {...props} />}/>
                <Route path='/productListing' exact component={ProductListing}/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    );


}
export default App;
