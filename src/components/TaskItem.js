import React, { Component } from 'react';
import styled from 'styled-components';

const StyledTaskItem = styled.div`
  width: calc(100% - 30px);
  background-color: #FFFFFF;
  display: inline-block;
  padding: 15px;
  margin-bottom: 15px;
`;

const StyledCheckBox = styled.div`
  display: inline-block;
  margin-right: 15px;

  & > input {
    display: none;
  }

  & > input + label {
    cursor: pointer;
    position: relative;
  }

  // Box
  & > input + label:before {
    content: '';
    display: inline-block;
    vertical-align: text-top;
    width: 25px;
    height: 25px;
    border: 1px solid #878787;
    border-radius: 5px;
    background-color: white;
  }

  // Box focus
  & > input:hover + label:before {
    background-color: #d0ebff;
  }
  
  // Box checked
  & > input:checked + label:before {
    background: #2196F3;
    border: 1px solid #2196F3;
  }

  & > input:checked + label:after {
    content: '';
    position: absolute;
    left: 7px;
    top: 12px;
    background: white;
    width: 3px;
    height: 3px;
    box-shadow: 
    3px 0 0 white,
    5px 0 0 white,
    5px -3px 0 white,
    5px -5px 0 white,
    5px -7px 0 white,
    5px -9px 0 white;
    transform: rotate(45deg);
  }

  // Disabled state label.
  & > input:disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }

  // Disabled box.
  & > input:disabled + label:before {
    box-shadow: none;
    background: #ddd;
  }
`;

const StyledTextarea = styled.textarea`
  resize:none;
`;

class TaskItem extends Component {

  state = {
    isEditing: false,
    isDone: false,
    content: ''
  }

  handleToggleEdit = () => {
    const { isEditing } = this.state;

    this.setState({
      isEditing: !isEditing
    });

  }

  handleChangeCheckBox = (e) => {
    const { task, handleUpdateTask } = this.props;
    console.dir(e.target.checked);

    this.setState({
      isDone: e.target.checked
    });

    task.isDone = e.target.checked;
    handleUpdateTask({
      ...task,      
    });
  }

  handleChangeContent = (e) => {
    this.setState({
      content: e.target.value
    });
  }

  handleRemoveBtn = () => {
    const { handleRemoveTask, task } = this.props;
    handleRemoveTask(task.id);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.state.content === nextState.content
      && this.state.isEditing === nextState.isEditing 
      && this.props.task === nextProps.task) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    const { id, isDone, content } = this.props.task;

    console.log("#componentDidUpdate", !prevState.isEditing, this.state.isEditing)
    if(!prevState.isEditing && this.state.isEditing) {
      this.setState({
        isDone: isDone,
        content: content
      });
    }

    // blur 시 update task
    if(prevState.isEditing && !this.state.isEditing) {
      this.props.handleUpdateTask({
        id: id,
        isDone: this.state.isDone,
        content: this.state.content
      });
    }
  }

  render() {
    const { id, isDone, content } = this.props.task;
    const { isEditing} = this.state;

    console.log("render", this.props.task);

    return (
      <StyledTaskItem>
        <StyledCheckBox>
          <input
            id={`${id}_ID`}
            name="isDone"
            type="checkbox"
            onChange={this.handleChangeCheckBox}
            checked={isDone}
          />
          <label htmlFor={`${id}_ID`}></label>
        </StyledCheckBox>
        {
          isEditing === false ? (
            <StyledTextarea
              name="content"
              value={content}
              onClick={this.handleToggleEdit}
              onChange={this.handleChangeContent}
              placeholder="Type Your Task Here"
              readOnly
            />
          ) : (
            <StyledTextarea 
              name="content"
              value={this.state.content}
              onBlur={this.handleToggleEdit}
              onChange={this.handleChangeContent}
              placeholder="Type Your Task Here"
            />
          )
        }


        <button onClick={this.handleRemoveBtn}>
          삭제
        </button>
      </StyledTaskItem>
    );
  }
}

export default TaskItem;