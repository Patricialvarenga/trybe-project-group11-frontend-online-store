import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <SearchBar />
          <Link data-testid="shopping-cart-button" to="/">
            Carrinho de Compras
          </Link>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
