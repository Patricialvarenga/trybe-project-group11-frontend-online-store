import React from 'react';
import PropTypes from 'prop-types';

export default class CategoriesList extends React.Component {
  render() {
    const { categorias, handleClick } = this.props;
    return (
      <div className="categories-list">
        <h2>Categorias</h2>
        <div>
          {categorias && categorias
            .map((categoria) => (
              <label key={ categoria.id } htmlFor={ categoria.id }>
                <input
                  type="radio"
                  name="category"
                  id={ categoria.id }
                  value={ categoria.id }
                  key={ categoria.id }
                  onClick={ () => handleClick(categoria.id) }
                  data-testid="category"
                />
                {categoria.name}
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
  handleClick: PropTypes.func.isRequired,
};
