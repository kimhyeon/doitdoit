import React, { Component } from 'react';
import FilterButton from './FilterButton';

class FilterGroup extends Component {
  render() {
    const { handleChageFilter } = this.props;
    
    return(
      <div>
        <FilterButton name={'all'} filter={this.props.filter} handleChageFilter={handleChageFilter}/>
        <FilterButton name={'task'} filter={this.props.filter} handleChageFilter={handleChageFilter}/>
        <FilterButton name={'done'} filter={this.props.filter} handleChageFilter={handleChageFilter}/>
      </div>
    );
  }
}

export default FilterGroup;