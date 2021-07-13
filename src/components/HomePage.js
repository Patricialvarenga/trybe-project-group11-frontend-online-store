import React from 'react';
import './styles/HomePage.css';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import Search from './Search';

export default class HomePage extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);

    this.state = {
      produto: '',
      itens: [],
      categorias: [],
      categoriaEscolhida: 'MLB1055',
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      produto: value,
    });
  }

  async fetchAPI() {
    const allCategories = await getCategories();
    const { produto, categoriaEscolhida } = this.state;
    const allItems = await getProductsFromCategoryAndQuery(categoriaEscolhida, produto);
    const { results } = allItems;

    this.setState({
      itens: await results,
      categorias: allCategories,
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
                  <li key={ item.id } data-testid="category">{item.name}</li>
                ))}
            </ul>
          </div>
        </div>
        <div className="search-container">
          <Search
            handleChange={ this.handleChange }
            onClick={ this.fetchAPI }
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
