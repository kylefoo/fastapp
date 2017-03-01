import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import fetch from 'isomorphic-fetch';
import ProductDetail from './ProductDetail';

class ProductsList extends Component {
    state = { products: [] };

    componentWillMount() {
      fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({ products: responseData });
        });
      }
    
    renderProducts() {
        return this.state.products.map( product => 
          <ProductDetail key={product.title} product={product} />
        );
    }

    render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderProducts()}
      </ScrollView>
    );
  }
}

export default ProductsList;