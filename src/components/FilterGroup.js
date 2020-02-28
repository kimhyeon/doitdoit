import React, { Component } from 'react';
import FilterButton from './FilterButton';

const filterCSS = {
  'textAlign': 'center',
  'marginTop': '10px',
  'paddingBottom': '15px'
}

class FilterGroup extends Component {
  render() {
    const { filter, handleChageFilter } = this.props;
    
    return(
      <div style={filterCSS}>
        <FilterButton 
          name={'All'}
          active={filter === 'All' ?  true : false}
          handleChageFilter={handleChageFilter}
        />
        <FilterButton
          name={'Task'}
          active={filter === 'Task' ?  true : false}
          handleChageFilter={handleChageFilter}
        />
        <FilterButton
          name={'Done'}
          active={filter === 'Done' ?  true : false}
          handleChageFilter={handleChageFilter}
        />
      </div>
    );
  }
}

export default FilterGroup;