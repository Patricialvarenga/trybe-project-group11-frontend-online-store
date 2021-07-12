import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={ SearchBar } />
          <Link data-testid="shopping-cart-button" to="/shoppingcart">
            Carrinho de Compras
          </Link>
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
