import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/Signup";
import ProductListing from "./components/ProductListing";

const App = (props) => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <LoginForm
                        onSubmit={() => true}
                        isLogin={true}
                    />
                </Route>
                <Route path='/signup' exact component={SignUpForm}/>
                <Route path='/productlisting' exact component={ProductListing}/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    );


}
export default App;
