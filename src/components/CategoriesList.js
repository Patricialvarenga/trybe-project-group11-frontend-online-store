import React from 'react';
import PropTypes from 'prop-types';

export default class CategoriesList extends React.Component {
  render() {
    const { categorias } = this.props;
    return (
      <div className="categories-list">
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

CategoriesList.propTypes = {
  categorias: PropTypes.arrayOf(Object).isRequired,
};
