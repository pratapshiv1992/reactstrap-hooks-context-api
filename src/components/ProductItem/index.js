import React from "react";
import {Button, Card, CardBody, CardSubtitle, CardTitle} from "reactstrap";
import PropTypes from "prop-types";
import './index.scss';


const ProductItem = ({item ={}, addToCart, isAddedToCart, removeFromCart, count}) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">{item.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Price: {item.price}</CardSubtitle>
                </CardBody>
                <img src={item.image} width='220px' height='180px' alt={item.name}/>
                <CardBody>
                    {isAddedToCart ?
                        <Button onClick={() => removeFromCart(item)}>
                            Remove from cart
                        </Button> :
                        <Button onClick={() => addToCart(item)}>
                            Add to cart ({count})
                        </Button>}
                </CardBody>
            </Card>
        </div>
    );
};

ProductItem.propTypes = {
    item: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
    isAddedToCart: PropTypes.bool.isRequired,
    removeFromCart: PropTypes.func.isRequired
};

export default ProductItem;