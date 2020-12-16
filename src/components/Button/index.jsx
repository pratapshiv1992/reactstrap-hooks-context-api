import React, {useState} from 'react';
import {Button, Tooltip} from 'reactstrap';
import {withRouter} from "react-router-dom";

const ButtonWrapper = (props) => {
    const {label, toolTip, onClick} = props;
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (
        <>
            <Button
                id="btnToolTip"
                className='cart'
                color="info"
                onClick={onClick}>
                {label}
            </Button>
            <Tooltip placement="left" isOpen={tooltipOpen} target="btnToolTip" toggle={toggle}>
                {toolTip}
            </Tooltip>
        </>
    );
}

export default withRouter(ButtonWrapper);