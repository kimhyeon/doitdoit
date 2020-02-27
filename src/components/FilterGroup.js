import React, { Component } from 'react';
import FilterButton from './FilterButton';

const filterCSS = {
  'textAlign': 'center'
}

class FilterGroup extends Component {
  render() {
    const { filter, handleChageFilter } = this.props;
    
    return(
      <div style={filterCSS}>
        <FilterButton name={'All'} filter={filter} handleChageFilter={handleChageFilter}/>
        <FilterButton name={'Task'} filter={filter} handleChageFilter={handleChageFilter}/>
        <FilterButton name={'Done'} filter={filter} handleChageFilter={handleChageFilter}/>
      </div>
    );
  }
}

export default FilterGroup;