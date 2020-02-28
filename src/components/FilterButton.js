import React, { Component, Fragment } from 'react';
import styled, { css } from 'styled-components';

const StyledFilter = styled.span`
  font-size: 16px;
  padding: 10px 12px;
  margin-left: 10px;
  display: inline-block;
  &:hover {
    cursor: pointer;
  }

  &:first-child {
    margin-left: 0;
  }

  ${props => {
    if(props.active) {
      return css`
        background-color: #E2EEF5;
        border-radius: 7px;
        color: #3A8BBB;
        font-family: 'Roboto-bold';
      `;
    }
  }}

`;

class FilterButton extends Component {

  handleClick = (e) => {
    const { filter, handleChageFilter } = this.props;
    console.log(this.props);
    console.dir(e.target.textContent);
    if(filter !== e.target.textContent) {
      handleChageFilter(e.target.textContent);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.active === nextProps.active) {
      return false;
    }
    return true;
  }

  render() {
    const { name, active } = this.props;
    console.log("filter btn render", name);

    return (
      <Fragment>

        {
          active ?
          (
            <StyledFilter onClick={this.handleClick} active>
            {name}
            </StyledFilter>
          ) :
          (
            <StyledFilter onClick={this.handleClick}>
            {name}
            </StyledFilter>
          )
        } 
      </Fragment>
    );
  }
}

export default FilterButton;