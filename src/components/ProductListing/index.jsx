import React, {useState} from 'react';
import {Container, Row, Col, Badge, Button} from 'reactstrap';
import {Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import ProductContext from '../ProductContext'
import './index.scss';
import PropTypes from "prop-types";

const Item = ({item, addToCart, isAddedToCart, removeFromCart}) => {
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
                            Add to cart
                        </Button>}
                </CardBody>
            </Card>
        </div>
    );
};

const ProductListing = (props) => {
    const [cart, setCart] = useState([]);
    const addToCart = (item) => {
        if (!cart.some(cartItem => cartItem.code === item.code)) {
            const value = [...cart];
            value.push(item);
            setCart(value);
        }
    }

    const removeFromCart = (item) => {
        const list = cart.filter(cartItem => cartItem.code !== item.code);
        setCart(list);
    }

    console.log('items in cart:', cart);

    return (
        <ProductContext.Consumer>
            {(productListing = []) => {
                return <div className='product-listing-root'>
                    <h2 className='page-heading'><Badge color='primary'>Product Listing</Badge></h2>
                    <h2 className='page-heading'>Cart : <Badge color='primary'>{cart.length}</Badge></h2>
                    <Container>
                        <Row>
                            {productListing.map(item => {
                                return <Col key={`${item.code}`} xs="4" sm="4">
                                    <Item
                                        item={item}
                                        addToCart={addToCart}
                                        isAddedToCart={cart.some(cartItem => cartItem.code === item.code)}
                                        removeFromCart={removeFromCart}
                                    />
                                </Col>
                            })}
                        </Row>
                    </Container>
                </div>
            }}
        </ProductContext.Consumer>
    );
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
    isAddedToCart: PropTypes.bool.isRequired,
    removeFromCart: PropTypes.func.isRequired
};

export default ProductListing;