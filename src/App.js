import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import ProductDetails from './components/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <section>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={ HomePage } />
              <Route exact path="/shoppingcart" component={ ShoppingCart } />
              <Route exact path="/checkout" component={ Checkout } />
              <Route
                exact
                path="/product/:categoria/:id"
                render={ (props) => <ProductDetails { ...props } /> }
              />
            </Switch>
          </BrowserRouter>
        </section>
      </main>
    );
  }
}

export default App;
