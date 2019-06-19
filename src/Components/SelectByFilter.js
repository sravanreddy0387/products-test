
import React, { Component } from 'react';
export default class SelectByFilter extends Component {

    constructor(props) {
        super(props);
    }

    filterBySize(event) {
        if (event.target.value == 'all') {
            this.props.actions.showAllProducts()
        } else {
            this.props.actions.filterProductsBySize(event.target.value);
        }

    }
    render() {
        return (
            <select onChange={this.filterBySize.bind(this)}>
                <option value='all'>Filter By Size</option>
                <option value='XS'>XS</option>
                <option value='S'>S</option>
                <option value='M'>M</option>
                <option value='L'>L</option>
                <option value='XL'>XL</option>
            </select>
        )
    }

}