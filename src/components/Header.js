import React, { Component } from 'react';
import FilterGroup from './FilterGroup'

class Header extends Component {

  render() {
    const { handleChageFilter } = this.props;
    console.log("**", handleChageFilter)
    return (
      <div>
        doitdoittask
        <FilterGroup filter={this.props.filter} handleChageFilter={handleChageFilter}/>
      </div>
    );
  }
}

export default Header;  