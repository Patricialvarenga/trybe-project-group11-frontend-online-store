import React from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends React.Component {
  render() {
    const { handleChange, itemList } = this.props;
    return (
      <div>
        <input type="text" data-testid="query-input" onChange={ handleChange } />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          {itemList.map((item) => (
            <div
              style={ { border: '1px solid black' } }
              data-testid="product"
              key={ item.id }
            >
              <h3>{item.title}</h3>
              <img src={ item.thumbnail } alt="Foto do Produto" />
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  itemList: PropTypes.arrayOf(Object).isRequired,
};
