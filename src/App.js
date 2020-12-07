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
import ProductContext from "./components/ProductContext";

const App = (props) => {
    return (
        <Router>
            <Switch>
                <ProductContext.Provider value='hello champ'>
                    <Route path='/' exact render={(props) => <LoginForm {...props} isLogin={true}/>}/>
                    <Route path='/signUp' exact render={(props) => <SignUpForm {...props} />}/>
                    <Route path='/productListing' exact component={ProductListing}/>
                    <Redirect to="/"/>
                </ProductContext.Provider>
            </Switch>
        </Router>
    );


}
export default App;
