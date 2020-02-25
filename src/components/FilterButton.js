import React, { Component, Fragment } from 'react';

class FilterButton extends Component {

  handleClick = (e) => {
    const { filter, handleChageFilter } = this.props;
    console.log(this.props);
    console.dir(e.target.textContent);
    if(filter !== e.target.textContent) {
      handleChageFilter(e.target.textContent);
    }
  }

  render() {
    const { name, filter } = this.props;

    return (
      <Fragment>
        <button onClick={this.handleClick}>
          {name === filter ? name.toUpperCase() : name}
        </button>
      </Fragment>
    );
  }
}

export default FilterButton;