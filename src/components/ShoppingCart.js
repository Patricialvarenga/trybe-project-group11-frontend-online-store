import React from 'react';
import { Link } from 'react-router-dom';
import './styles/ShoppingCart.css';

export default class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.listCart = this.listCart.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
    this.renderCart = this.renderCart.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.state = {
      itensListCart: [],
      itemsCounter: [],
    };
  }

  componentDidMount() {
    this.listCart();
    this.emptyCart();
    this.renderCart();
  }

  listCart() {
    const cartList = localStorage
      .getItem('itensCart');
    const arrayList = JSON.parse(cartList);
    if (!arrayList) {
      this.setState({
        itensListCart: [],
      });
    } else {
      this.setState({
        itensListCart: arrayList,
      });
    }
  }

  addProduct(id) {
    this.setState((prevState) => ({
      itemsCounter: [...prevState.itemsCounter, id],
    }));
  }

  removeProduct(id) {
    const { itemsCounter } = this.state;
    const idIndex = itemsCounter.indexOf(id);
    itemsCounter.splice(idIndex, 1);
    this.setState({
      itemsCounter,
    });
  }

  emptyCart() {
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }

  renderCart() {
    const { itensListCart, itemsCounter } = this.state;

    return (
      <div>
        {
          itensListCart
            .map(({ id, title, thumbnail, price }) => (
              <div key={ id } className="checkout-item">
                <h4 data-testid="shopping-cart-product-name">{title}</h4>
                <img src={ thumbnail } alt="Foto do Produto" />
                <p>{`R$${price}`}</p>
                <p htmlFor="add"> Qtd.</p>
                <p data-testid="shopping-cart-product-quantity">
                  {itemsCounter.filter((item) => (
                    item === id
                  )).length + 1}
                </p>
                <button
                  type="button"
                  data-testid="product-increase-quantity"
                  onClick={ () => this.addProduct(id) }
                >
                  +
                </button>
                <button
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={ () => this.removeProduct(id) }
                >
                  -
                </button>
              </div>
            ))
        }
      </div>
    );
  }

  render() {
    const { itensListCart } = this.state;

    return (
      <div>
        <span>
          Quantidade de produtos no carrinho:
          { itensListCart.length }
        </span>
        <Link to="/">Voltar ao inicio</Link>
        {itensListCart.length <= 0 && this.emptyCart()}
        {itensListCart.length > 0 && this.renderCart()}
        <div>
          <Link to="/checkout" data-testid="checkout-products">Finalizar Compra</Link>
        </div>
      </div>
    );
  }
}
