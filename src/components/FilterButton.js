import React, { Component, Fragment } from 'react';

class FilterButton extends Component {
  render() {
    const { name } = this.props;
    return (
      <Fragment>
        <button>{name}</button>
      </Fragment>
    );
  }
}

export default FilterButton;