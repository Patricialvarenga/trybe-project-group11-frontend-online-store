import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ShoppingCart from './components/ShoppingCart';

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
            </Switch>
          </BrowserRouter>
        </section>
      </main>
    );
  }
}

export default App;
