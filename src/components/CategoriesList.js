import React from 'react';

export default class CategoriesList extends React.Component {
  render() {
    const { categorias } = this.props;
    return (
      <div>
        <h2>Categorias</h2>
        <ul>
          {categorias && categorias
            .map((item) => (
              <li key={ item.id } data-testid="category">{item.name}</li>
            ))}
        </ul>
      </div>
    );
  }
}
