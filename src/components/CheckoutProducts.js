import React from 'react';

export default class CheckoutProducts extends React.Component {
  constructor() {
    super();

    this.getStorage = this.getStorage.bind(this);

    this.state = {
      checkoutProducts: [],
    };
  }

  componentDidMount() {
    this.getStorage();
  }

  getStorage() {
    const cartList = localStorage.getItem('itensCart');
    this.setState({
      checkoutProducts: cartList,
    });
  }

  render() {
    const { checkoutProducts } = this.state;
    return (
      <section className="checkout-products">
        <h2>Produtos no Carrinho</h2>
        <div>
          {
            checkoutProducts || null
          }
        </div>
      </section>
    );
  }
}
