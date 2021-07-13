import React from 'react';
import './styles/HomePage.css';
import CategoriesList from './CategoriesList';
import ItemsList from './ItemsList';

export default class HomePage extends React.Component {
  render() {
    return (
      <section>
        <nav className="categories">
          <CategoriesList />
        </nav>
        <ItemsList />
      </section>

    );
  }
}
