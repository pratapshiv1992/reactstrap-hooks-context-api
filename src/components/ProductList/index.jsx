import React, {useState} from 'react';
import {Container, Row, Col} from 'reactstrap';
import ProductContext from '../ProductContext';
import ProductItem from '../ProductItem'
import Button from '../Button';
import PageHeading from "../PageHeading";
import './index.scss';


const ProductListing = (props) => {
    const {history: {push}} = props;
    const [cart, setCart] = useState({});
    const addToCart = (item) => {
        if (cart[item.code]) {
            const newCart = {...cart};
            newCart[item.code]['count'] = cart[item.code]['count'] + 1;
            setCart(newCart);
        } else {
            const newCart = {
                ...cart,
                [item.code]: {
                    count: 1,
                    ...item
                }
            };
            setCart(newCart);
        }
    }

    const cartItems = [];
    for(let key in cart){
        const item = cart[key];
        cartItems.push(item);
    }

    return (
        <ProductContext.Consumer>
            {(productListing = []) => {
                return <div className='product-listing-root'>
                    <PageHeading title='Product List'>
                        <Button
                            label='Cart'
                            toolTip={cartItems.reduce((a, b) => a + (b['count'] || 0), 0)}
                            onClick={() => {
                                push('/cart', cartItems);
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
                                        isAddedToCart={false}
                                        count={(cart[item.code] || {})['count'] || 0}
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