import React, {useState} from 'react';
import {Container, Row, Col} from 'reactstrap';
import ProductContext from '../ProductContext';
import ProductItem from '../ProductItem'
import Button from '../Button';
import PageHeading from "../PageHeading";
import './index.scss';


const ProductListing = (props) => {
    const {history: {push}} = props;
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

    return (
        <ProductContext.Consumer>
            {(productListing = []) => {
                return <div className='product-listing-root'>
                    <PageHeading title='Product List'>
                        <Button
                            label='Cart'
                            toolTip={cart.length}
                            onClick={() => {
                                push('/cart');
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
            }}
        </ProductContext.Consumer>
    );
}


export default ProductListing;