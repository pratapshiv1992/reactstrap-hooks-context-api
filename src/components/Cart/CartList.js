import React, {useState} from 'react';
import { Table } from 'reactstrap';
import {Container, Row, Col} from 'reactstrap';
import Button from '../Button';
import PageHeading from "../PageHeading";
import './index.scss';

const CartList = (props) => {
    const {history: {push, location: {state = []}}} = props;
    const [productListing, setProductListing] = useState(state);
    const removeItem = (item) => {
        const temp = JSON.parse(JSON.stringify(productListing));
        const removedItem = temp.find(itm=>itm.code === item.code);
        if(removedItem['count'] > 0){
            removedItem['count'] = removedItem['count'] - 1;
        }
        const newValues = [...temp];
        setProductListing(newValues);
    }


    let totalAmount = 0;
    return (
        <Container className='cart-listing-root'>
            <PageHeading title='Review your Cart'>
                <Button
                    label='Products'
                    toolTip='go to product listing'
                    onClick={() => {
                        push('/productListing');
                    }}
                />
            </PageHeading>
            <Table>
                <thead>
                <tr>
                    <th>S.No</th>
                    <th>Product</th>
                    <th>Amount</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th style={{textAlign: 'center'}}>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    productListing.map((item, i) => {
                        const [currency, amount] = item.price.split('$')
                        const total = Math.round(amount*item.count*10) / 10;
                        totalAmount = totalAmount + total;
                        const totalInUsd = `$${total}`;
                        return <tr>
                            <th>{i+1}</th>
                            <th style={{width: 200}}>
                                <img
                                    src={item.image}
                                    width="120px"
                                    height="80px"
                                    alt="Banana"
                                    style={{display: "block"}}
                                />
                                <label>{item.name}</label>
                            </th>
                            <td>{item.price}</td>
                            <td>{item.count}</td>
                            <td>{totalInUsd}</td>
                            <td>
                                <Button
                                    id='remove'
                                    label='Remove'
                                    showToolTip={false}
                                    onClick={() => {
                                        removeItem(item);
                                    }}
                                />
                            </td>
                        </tr>
                    })
                }
                </tbody>
            </Table>
            <h2 className='total-amount'>Total: ${totalAmount}</h2>
        </Container>
    );
}


export default CartList;