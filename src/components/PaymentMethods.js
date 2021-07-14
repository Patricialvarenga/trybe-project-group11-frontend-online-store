import React from 'react';

export default class PaymentMethods extends React.Component {
  render() {
    return (
      <section className="payment-methods">
        <h2>Métodos de Pagamento</h2>
        <div>
          <label htmlFor="cartao">
            <input type="radio" name="payment-choice" id="cartao" value="cartao" />
            Cartão
          </label>
          <label htmlFor="dinheiro">
            <input type="radio" name="payment-choice" id="dinheiro" value="dinheiro" />
            Dinheiro
          </label>
          <label htmlFor="boleto">
            <input type="radio" name="payment-choice" id="boleto" value="boleto" />
            Boleto
          </label>
          <label htmlFor="cheque">
            <input type="radio" name="payment-choice" id="cheque" value="cheque" />
            Cheque
          </label>
        </div>
      </section>
    );
  }
}
