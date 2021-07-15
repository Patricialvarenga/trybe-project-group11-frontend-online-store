import React from 'react';
import PropTypes from 'prop-types';
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.fetchProduct = this.fetchProduct.bind(this);
    this.addItemCart = this.addItemCart.bind(this);

    this.state = {
      produto: [],
      qtdCart: 0,
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  addItemCart(produto) {
    console.log(produto);
    const listCart = localStorage
      .getItem('itensCart') ? JSON.parse(localStorage.getItem('itensCart')) : [];
    listCart.push(produto);
    localStorage.setItem('itensCart', JSON.stringify(listCart));
    this.setState({
      qtdCart: listCart.length,
    });
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
    const { produto, qtdCart } = this.state;
    return (
      <div>
        <section>
          <Link to="/">Home</Link>
          <Link to="/shoppingcart" data-testid="shopping-cart-button">
            <IoCartOutline size={ 32 } />
          </Link>
          <span>
            { qtdCart }
          </span>
          <div>
            <h3 data-testid="product-detail-name">{produto.title}</h3>
            <img src={ produto.thumbnail } alt="Foto do produto selecionado" />
            <p>
              R$
              {produto.price}
            </p>
            <button
              type="button"
              onClick={ (
              ) => this.addItemCart(produto) }
              data-testid="product-detail-add-to-cart"
            >
              Adicionar ao carrinho
            </button>
          </div>
        </section>
      </div>

    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};
