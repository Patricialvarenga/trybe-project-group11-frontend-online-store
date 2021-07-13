import React from 'react';
import './styles/HomePage.css';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Search from './Search';
import CategoriesList from './CategoriesList';

export default class HomePage extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);

    this.state = {
      produto: '',
      itens: [],
      categoriaEscolhida: 'MLB1055',
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      produto: value,
    });
    console.log(name);
  }

  async fetchAPI() {
    const { produto, categoriaEscolhida } = this.state;
    const allItems = await getProductsFromCategoryAndQuery(categoriaEscolhida, produto);
    this.setState({
      itens: allItems.results,
    });
  }

  render() {
    const { itens } = this.state;
    return (
      <section>
        <CategoriesList />
        <div>
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
