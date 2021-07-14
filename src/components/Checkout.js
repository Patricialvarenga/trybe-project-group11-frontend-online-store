import React from 'react';
import './styles/Checkout.css';
import CheckoutProducts from './CheckoutProducts';
import BuyerInfo from './BuyerInfo';
import PaymentMethods from './PaymentMethods';

export default class Checkout extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      address: '',
      cpf: '',
      cep: '',
      email: '',
      fullname: '',
      phone: '',
    };
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { cpf, cep, email, fullname, phone, address } = this.state;
    return (
      <form className="checkout-container" onSubmit={ (e) => e.preventDefault() }>
        <CheckoutProducts />
        <BuyerInfo
          cpf={ cpf }
          cep={ cep }
          email={ email }
          fullname={ fullname }
          phone={ phone }
          address={ address }
          handleChange={ this.handleChange }
        />
        <PaymentMethods />
        <button type="submit" onClick={ this.formValidation }>Finalizar Compra</button>
      </form>
    );
  }
}
