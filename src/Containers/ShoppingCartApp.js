import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../Actions/actions';
import ProductList from '../Components/ProductList'
import SelectByFilter from '../Components/SelectByFilter';

class ShoppingCartApp extends Component {


    render() {
        const actions = bindActionCreators(action, this.props.dispatch);
        return (
            <div className='content'>
                <div className='header'>
                    <h1>Women's tops</h1>
                    <SelectByFilter actions={actions} />
                </div>
                <ProductList actions={actions} products={this.props.products} />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        products: state.data.products
    }
}

export default connect(mapStateToProps)(ShoppingCartApp)
