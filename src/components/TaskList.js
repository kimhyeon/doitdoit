import React, { Component } from 'react';
import TaskItem from './TaskItem';
import styled, { css } from 'styled-components';

const StyledButtonContainer = styled.div`
  text-align: center;
  padding: 20px 0;
`;

const StyledButton = styled.div`
  color: #FFFFFF;
  display: inline-block;
  background-color: #2196F3;
  border-radius: 7px;
  padding: 8px 14px;

  &:hover {
    cursor: pointer;
  }

  &:first-child {
    margin-right: 10px;
  }

  ${props => {
    if(props.id === "removeDones") {
      return css`
        background-color: #EA4C89
      `
    }
  }}
`;

// text-align: center;
const StyledTaskList = styled.div`
  margin: 0 auto;
  width: 95%;
  max-width: 800px;
`;

class TaskList extends Component {

  static defaultProps = {
    tasks: []
  }

  handleClickCreateBtn = () => {
    const { handleCreateTask } = this.props;
    handleCreateTask({
      isDone: false,
      content: ''
    });
  }

  handleRemoveDonesBtn = () => {
    const { handleRemoveDones } = this.props;
    console.log(handleRemoveDones);
    handleRemoveDones();
  }

  render() {

    console.log("render");

    const { tasks, handleUpdateTask, handleRemoveTask } = this.props;
    const list = tasks.map((task) => {
      return (
        <TaskItem key={task.id}
          task={task}
          handleUpdateTask={handleUpdateTask}
          handleRemoveTask={handleRemoveTask}
        />
      )
    });
  
    return (
      <div>
        <StyledButtonContainer>
          <StyledButton id="addTask" onClick={this.handleClickCreateBtn}>Add New Task</StyledButton>
          <StyledButton id="removeDones" onClick={this.handleRemoveDonesBtn}>Remove Dones</StyledButton>
        </StyledButtonContainer>
        <StyledTaskList>
          {list}
        </StyledTaskList>
      </div>
    );

  };

}

export default TaskList;