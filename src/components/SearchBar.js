import React from 'react';

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
          {
            console.log(itemList)
          }
        </div>
      </div>
    );
  }
}
