import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Search extends React.Component {
  render() {
    const { handleChange, onClick } = this.props;
    return (
      <div>
        <input type="text" data-testid="query-input" onChange={ handleChange } />
        <button
          data-testid="query-button"
          type="button"
          onClick={ onClick }
        >
          Pesquisar
        </button>
        <Link to="/shoppingcart" data-testid="shopping-cart-button">
          Carrinho de Compras
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
