import React, { Component } from 'react';
import FilterGroup from './FilterGroup'
import styled from 'styled-components';

const StyledHeader = styled.div`
  position: relative;
  background-color: #FFFFFF;
`;

const StyledTitle = styled.span`
  font-family: 'Pacifico-Regular';
  font-size: 25px;
  display: inline-block;
  margin-left: 35px;
  margin-top 20px;
`;

class Header extends Component {

  render() {
    const { filter, handleChageFilter } = this.props;
    
    return (
      <StyledHeader>
        <StyledTitle>
          doitdoittask
        </StyledTitle>
        <FilterGroup filter={filter} handleChageFilter={handleChageFilter}/>
      </StyledHeader>
    );
  }
}

export default Header;  