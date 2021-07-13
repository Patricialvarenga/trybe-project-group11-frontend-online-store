import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import './styles/ItemsList.css';

export default class ItemsList extends React.Component {
  constructor() {
    super();

    this.fetchItems = this.fetchItems.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      items: [],
      produto: '',
    };
  }

  componentDidMount() {
    this.fetchItems();
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      produto: value,
    });
    console.log(value);
  }

  async fetchItems() {
    const { produto } = this.state;
    const allItems = await getProductsFromCategoryAndQuery('MLB1055', produto);
    this.setState({
      items: allItems.results,
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div className="search-container">
        <div className="search-bar">
          <div>
            <input type="text" data-testid="query-input" onChange={ this.handleChange } />
            <button
              data-testid="query-button"
              type="button"
              onClick={ this.fetchItems }
            >
              Pesquisar
            </button>
          </div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        <div className="items">

          {items.map((item) => (
            <div
              style={ { border: '1px solid black' } }
              data-testid="product"
              key={ item.id }
              className="each-item"
            >
              <h3>{item.title}</h3>
              <img src={ item.thumbnail } alt="Foto do Produto" />
              <p>{`R$${item.price}`}</p>
            </div>
          ))}
        </div>
      </div>

    );
  }
}
