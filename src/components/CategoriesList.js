import React from 'react';
import PropTypes from 'prop-types';

// Lógica de programação inspirada no projeto do Saulo Kirchmaier https://saulokirchmaier.github.io/no-master-store-shopping/#/

export default class CategoriesList extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   categories: [],
    // };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { onChange } = this.props;
    onChange(event.target.value);
  }

  render() {
    const { categorias } = this.props;
    return (
      <div>
        <h2>Categorias</h2>
        <div onChange={ this.handleClick }>
          {categorias && categorias
            .map((item) => (
              <label key={ item.id } htmlFor={ item.id }>
                <input
                  type="radio"
                  name="category"
                  id={ item.id }
                  value={ item.id }
                  key={ item.id }
                />
                {item.name}
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
  onChange: PropTypes.func.isRequired,
};
