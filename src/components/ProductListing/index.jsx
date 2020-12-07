import React from 'react';
import ProductContext from '../ProductContext'
import './index.scss';

const ProductListing = (props) => {
    return (
        <ProductContext.Consumer>
            {value => {
                return <h1>This is product listing {value}</h1>
            }}
        </ProductContext.Consumer>
    );
}

export default ProductListing;