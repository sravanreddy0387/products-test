import React, { Component } from 'react';

import Product from './Product'
export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.props.actions.getProductsList();
    }

    render() {
        return (
            <div className='product-list'>
                {this.props.products.map((item, index) => {
                    return <Product product={item} key={item.index} />
                })}
            </div>
        );
    }
}

