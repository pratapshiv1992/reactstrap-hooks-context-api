import React, {useState} from 'react';
import {Container, Row, Col} from 'reactstrap';
import ProductItem from '../ProductItem'
import Button from '../Button';
import PageHeading from "../PageHeading";
import './index.scss';


const CartList = (props) => {
    const {productListing = [], history: {push}} = props;
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

    return <div className='product-listing-root'>
        <PageHeading title='Review your Cart'>
            <Button
                label='Products'
                toolTip='go to product listing'
                onClick={() => {
                    push('/productListing');
                }}
            />
        </PageHeading>
        <Container>
            <Row>
                {productListing.map(item => {
                    return <Col key={`${item.code}`} xs="4" sm="4">
                        <ProductItem
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
}


export default CartList;