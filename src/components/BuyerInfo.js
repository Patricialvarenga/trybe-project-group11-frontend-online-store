import React from 'react';
import PropTypes from 'prop-types';

export default class BuyerInfo extends React.Component {
  render() {
    const { handleChange, cpf, cep, email, fullname, phone, address } = this.props;
    return (
      <section className="buyer-informations">
        <h2>Informações do comprador</h2>
        <div className="first-layer-informations">
          <input
            type="text"
            data-testid="checkout-fullname"
            placeholder="Nome Completo"
            name="fullname"
            value={ fullname }
            onChange={ handleChange }
          />
          <input
            type="text"
            data-testid="checkout-cpf"
            placeholder="CPF"
            name="cpf"
            value={ cpf }
            onChange={ handleChange }
          />
          <input
            type="text"
            data-testid="checkout-email"
            placeholder="E-mail"
            name="email"
            value={ email }
            onChange={ handleChange }
          />
          <input
            type="text"
            data-testid="checkout-phone"
            placeholder="Telefone"
            name="phone"
            value={ phone }
            onChange={ handleChange }
          />
          <input
            type="text"
            data-testid="checkout-cep"
            placeholder="CEP"
            name="cep"
            value={ cep }
            onChange={ handleChange }
          />
          <input
            type="text"
            data-testid="checkout-address"
            placeholder="Endereço"
            name="address"
            value={ address }
            onChange={ handleChange }
          />
        </div>
      </section>
    );
  }
}

BuyerInfo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  cpf: PropTypes.string.isRequired,
  cep: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};
