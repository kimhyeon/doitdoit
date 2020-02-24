import React, { Component } from 'react';
import FilterButton from './FilterButton';

class FilterGroup extends Component {
  render() {
    return(
      <div>
        <FilterButton name={'All'} />
        <FilterButton name={'Task'} />
        <FilterButton name={'Done'} />
      </div>
    );
  }
}

export default FilterGroup;