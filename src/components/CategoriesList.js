import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

export default class CategoriesList extends React.Component {
  render() {
    const { categorias, handleClick } = this.props;
    return (
      <div>
        <h2>Categorias</h2>
        <ul>
          {categorias && categorias
            .map((item) => (
              <button
                type="button"
                id={ item.id }
                onClick={ handleClick }
                key={ item.id }
                data-testid="category"
              >
                {item.name}
              </button>
            ))}
        </ul>
      </div>
    );
  }
}

CategoriesList.propTypes = {
  categorias: PropTypes.arrayOf(Object).isRequired,
  handleClick: PropTypes.func.isRequired,
};

// chamar a função q exibe os produtos na tela
