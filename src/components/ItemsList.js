import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import SearchBar from './SearchBar';

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
      <div>
        <SearchBar
          handleChange={ this.handleChange }
          itemList={ items }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.fetchItems }
        >
          Pesquisar
        </button>
      </div>

    );
  }
}
