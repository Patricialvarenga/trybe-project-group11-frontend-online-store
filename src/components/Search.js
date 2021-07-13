import React from 'react';
import PropTypes from 'prop-types';

export default class Search extends React.Component {
  render() {
    const { handleChange, onClick } = this.props;
    return (
      <div>
      </div>
    );
  }
}

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
