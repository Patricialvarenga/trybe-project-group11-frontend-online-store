import React from 'react';
import PropTypes from 'prop-types';

import { getProductsFromCategoryAndQuery } from '../services/api';

export default class ProductDetails extends React.Component {
  constructor() {
    super();

    this.fetchProduct = this.fetchProduct.bind(this);

    this.state = {
      produto: [],
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  async fetchProduct() {
    const { match: { params } } = this.props;
    const { categoria, id } = params;
    const eachProduct = await getProductsFromCategoryAndQuery(categoria, '');
    const { results } = eachProduct;
    const foundProduct = results.find((item) => item.id === id);

    this.setState({
      produto: foundProduct,
    });
  }

  render() {
    const { produto } = this.state;
    return (
      <div>
        <h3 data-testid="product-detail-name">{produto.title}</h3>
        <img src={ produto.thumbnail } alt="Foto do produto selecionado" />

      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};
