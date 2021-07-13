import React from 'react';
import PropTypes from 'prop-types';

export default class CategoriesList extends React.Component {
  render() {
    const { categorias } = this.props;
    return (
      <div>
        <h2>Categorias</h2>
        <div>
          {categorias && categorias
            .map((item) => (
              <label key={ item.id } htmlFor={ item.id }>
                <input type="radio" name="category" id={ item.id } value={ item.id } />
                { item.name }
                <br />
              </label>
            ))}
        </div>
      </div>
    );
  }
}

CategoriesList.propTypes = {
  categorias: PropTypes.arrayOf(Object).isRequired,
};
