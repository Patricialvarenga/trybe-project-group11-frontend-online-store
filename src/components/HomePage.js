import React from 'react';
import './styles/HomePage.css';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import CategoriesList from './CategoriesList';

export default class HomePage extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      produto: '',
      itens: [],
      categorias: [],
      categoriaEscolhida: 'MLB1055',
    };
  }

  async componentDidMount() {
    await this.fetchAPI();
  }

  handleChange({ target }) {
    const { value/* , name */ } = target;
    this.setState((prevState) => ({
      ...prevState,
      produto: value,
    }));
  }

  handleClick(id) {
    this.setState({
      categoriaEscolhida: id,
    });
  }

  async fetchAPI() {
    const { produto, categoriaEscolhida } = this.state;
    const allItems = await getProductsFromCategoryAndQuery(categoriaEscolhida, produto);
    const allCategories = await getCategories();
    const results = allItems ? allItems.results : [];

    this.setState({
      itens: results,
      categorias: allCategories,
    });
  }

  render() {
    const { itens, categorias, categoriaEscolhida } = this.state;
    return (
      <section>
        <CategoriesList
          categorias={ categorias }
          categoriaEscolhida={ categoriaEscolhida }
          handleClick={ this.handleClick }
        />
        <div>
          <input type="text" data-testid="query-input" onChange={ this.handleChange } />
          <button
            data-testid="query-button"
            type="button"
            onClick={ () => this.fetchAPI() }
          >
            Pesquisar
          </button>
          <Link to="/shoppingcart" data-testid="shopping-cart-button">
            Carrinho de Compras
          </Link>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        <div className="items-container">
          {
            itens && itens.map(({ id, title, thumbnail, price }) => (
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
