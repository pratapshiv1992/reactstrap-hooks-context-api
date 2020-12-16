import React from "react";
import {withRouter} from "react-router-dom";
import {Button} from "reactstrap";
import './index.scss'

const Logout = (props) => {
    const {history: {push}} = props;
    return <Button
        className='logout-btn'
        color="danger"
        onClick={() => {
            localStorage.removeItem('isAuthenticated');
            setTimeout(() => {
                push('/');
            }, 200);
        }}>
        Logout
    </Button>
}

export default withRouter(Logout);