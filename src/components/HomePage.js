import React from 'react';
import './styles/HomePage.css';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import Search from './Search';

export default class HomePage extends React.Component {
  constructor() {
    super();

    this.fetchCategories = this.fetchCategories.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fetchItems = this.fetchItems.bind(this);

    this.state = {
      produto: '',
      itens: [],
      categorias: [],
    };
  }

  componentDidMount() {
    this.fetchItems();
    this.fetchCategories();
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      produto: value,
    });
  }

  async fetchCategories() {
    const allCategories = await getCategories();
    this.setState({
      categorias: allCategories,
    });
  }

  async fetchItems() {
    const { produto } = this.state;
    const allItems = await getProductsFromCategoryAndQuery('MLB1055', produto);
    this.setState({
      itens: allItems.results,
    });
  }

  render() {
    const { itens, categorias } = this.state;
    return (
      <section>
        <div className="categories-list">
          <div>
            <h2>Categorias</h2>
            <ul>
              {categorias
                .map((item) => (
                  <li data-testid="category" key={ item.id }>{item.name}</li>
                ))}
            </ul>
          </div>
        </div>
        <div className="search-container">
          <Search
            handleChange={ this.handleChange }
            onClick={ this.fetchItems }
          />
        </div>
        <div className="items-container">
          {
            itens.map(({ id, title, thumbnail, price }) => (
              <div
                data-testid="product"
                key={ id }
                className="each-item"
              >
                <h3>{title}</h3>
                <img src={ thumbnail } alt="Foto do Produto" />
                <p>{`R$${price}`}</p>
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}
