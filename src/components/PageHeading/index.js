import React from "react";
import {withRouter} from "react-router-dom";
import {Badge} from "reactstrap";
import './index.scss'
import Logout from "../Logout";

const PageHeading = (props) => {
    const {title} = props;
    return <h2 className='page-heading'>
        <Badge color='primary'>{title}</Badge>
        {props.children}
        <Logout/>
    </h2>
}

export default withRouter(PageHeading);