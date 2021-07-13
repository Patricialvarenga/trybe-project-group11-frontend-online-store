import React from 'react';
import { getCategories } from '../services/api';

export default class CategoriesList extends React.Component {
  constructor() {
    super();

    this.state = {
      categorias: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const allCategories = await getCategories();
    this.setState({ categorias: allCategories });
  }

  render() {
    const { categorias } = this.state;

    return (
      <div>
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

    );
  }
}
