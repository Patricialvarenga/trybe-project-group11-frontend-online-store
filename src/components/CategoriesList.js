import React from 'react';
import { getCategories } from '../services/api';

export default class CategoriesList extends React.Component {
  constructor() {
    super();

    this.fetchCategories = this.fetchCategories.bind(this);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const allCategories = await getCategories();
    this.setState({
      categories: allCategories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ul>
          {categories.map((item) => (
            <li key={ item.id } data-testid="category">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
