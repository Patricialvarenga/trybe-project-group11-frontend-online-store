import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import ShoppingCart from './components/ShoppingCart';
import CategoriesList from './components/CategoriesList';
import ItemsList from './components/ItemsList';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <section>
          <nav className="categories">
            <CategoriesList />
          </nav>
          <ItemsList />
        </section>
      </main>
    );
  }
}

export default App;
