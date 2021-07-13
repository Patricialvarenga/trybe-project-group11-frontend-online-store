import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
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
        <BrowserRouter>
          <Route exact path="/" component={ ItemsList } />
          <Route exact path="/" component={ CategoriesList } />
          <Link data-testid="shopping-cart-button" to="/shoppingcart">
            Carrinho de Compras
          </Link>
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
