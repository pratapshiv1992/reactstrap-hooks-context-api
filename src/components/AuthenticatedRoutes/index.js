import {Redirect, Route, Switch} from "react-router-dom";
import ProductContext from "../ProductContext";
import ProductListing from "../ProductList";
import CartList from "../Cart/CartList";
import React from "react";

const AuthenticatedRoutes = ({productListing}) => {
    return <Switch>
        <ProductContext.Provider value={productListing}>
            <Route path='/productListing' exact component={ProductListing}/>
            <Route path='/cart' exact component={CartList}/>
            <Redirect to="/productListing"/>
        </ProductContext.Provider>
    </Switch>
}

export default AuthenticatedRoutes;