import React from "react";
import {getAPIResponse} from "../../utils";
import AuthenticatedRoutes from "../AuthenticatedRoutes";
import UnAuthenticatedRoutes from "../UnAuthenticatedRoutes";
import {withRouter} from "react-router-dom";

class Main extends React.Component {
    state = {
        productListing: [],
        isAuthenticated: !!localStorage.getItem('isAuthenticated')
    }

    componentWillMount() {
        const path = '/interview';
        this.unlisten = this.props.history.listen((location, action) => {
            let isAuthenticated = localStorage.getItem('isAuthenticated');
            if (this.state.isAuthenticated == false && isAuthenticated == 'true') {
                setTimeout(() => {
                    this.props.history.push('/productListing');
                }, 2000)
                this.setState({isAuthenticated});
            } else if (isAuthenticated === null) {
                this.setState({isAuthenticated: false});
            }
        });
        getAPIResponse(path).then(response => {
            this.setState({productListing: response.data});
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    render() {
        const {productListing, isAuthenticated} = this.state;
        return (
            isAuthenticated ?
                <AuthenticatedRoutes
                    productListing={productListing}
                /> :
                <UnAuthenticatedRoutes/>
        );
    }
}

export default withRouter(Main);