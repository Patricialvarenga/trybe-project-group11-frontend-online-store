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
        <section>
          <nav className="categories">
            <CategoriesList />
          </nav>
          <div className="ctems">
            <BrowserRouter>
              <ItemsList />
              <Link data-testid="shopping-cart-button" to="/shoppingcart">
                Carrinho de Compras
              </Link>
              <Route exact path="/shoppingcart" component={ ShoppingCart } />
            </BrowserRouter>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
