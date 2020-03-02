import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const StyledTaskItem = styled.div`
  width: calc(100% - 30px);
  background-color: #FFFFFF;
  display: flex;
  position: relative;
  padding: 15px;
  margin-bottom: 15px;
`;

const StyledCheckBox = styled.div`
  display: inline-block;
  margin-right: 15px;
  margin-top: 6px;

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
    width: 28px;
    height: 28px;
    border: 1px solid #878787;
    border-radius: 5px;
    background-color: white;
  }

  // Box focus
  & > input:hover + label:before {
    // background-color: #d0ebff;
  }
  
  // Box checked
  & > input:checked + label:before {
    background: #2196F3;
    border: 1px solid #2196F3;
  }

  & > input:checked + label:after {
    content: '';
    position: absolute;
    left: 8px;
    top: 13px;
    background: white;
    width: 4px;
    height: 4px;
    box-shadow: 
    3px 0 0 white,
    5px 0 0 white,
    5px -3px 0 white,
    5px -5px 0 white,
    5px -7px 0 white,
    5px -10px 0 white;
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
  resize: none;
  font-family: Roboto-regular;
  font-size: 20px;
  line-height: 24px;
  height: auto;
  width: calc(100% - 78px);
  overflow: auto;
  box-sizing: border-box;
  padding: 8px;
  border: 1px solid #FFFFFF;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #5994FD;
  }

  ${props => {
    if(props.isDone) {
      return css`
        text-decoration: line-through;
        color: #2196F3;
      `
    }
  }}

`;

const StyledRemoveBtn = styled.div`
  position: absolute;
  right: 15px;
  width: 28px;
  height: 28px;
  margin-top: 7px;
  opacity: 0.3;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  &:before, &:after {
    position: absolute;
    left: 13px;
    content: '';
    height: 29px;
    width: 2px;
    background-color: #333;
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;


class TaskItem extends Component {

  editInput = React.createRef();

  textarea = {
    minRows: 1,
    maxRows: 10
  }

  state = {
    isEditing: this.props.isNew,
    isDone: false,
    content: '',
    rows: 1
  }

  handleToggleEdit = () => {
    const { isEditing } = this.state;

    this.setState({
      isEditing: !isEditing
    });
  }
  
  handleKeyDown = (e) => {
    console.dir(e.key);
    if(e.key === "Escape") {
      e.target.blur();
    }
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
    
    const { minRows, maxRows } = this.textarea;
    const { rows } = this.state;
    const textareaLineHeight = 24;
    const textareaPaddingTotalHeight = 16;
    
    const previousRows = e.target.rows;
    e.target.rows = minRows; // 1줄로 만들어서 스크롤 높이 구해오기
    
    const currentRows = ((e.target.scrollHeight - textareaPaddingTotalHeight) / textareaLineHeight);
    console.warn(`${previousRows}-${e.target.scrollHeight}`, `${currentRows}-${e.target.scrollHeight - textareaPaddingTotalHeight}`);
    
    if (currentRows === previousRows) {
      e.target.rows = currentRows;   
    }
    
		if (currentRows >= maxRows) {
			e.target.rows = maxRows;
			e.target.scrollTop = e.target.scrollHeight;
    }
    
    console.warn(e.target.rows, ~~(e.target.scrollHeight / textareaLineHeight));

    this.setState({
      rows: currentRows > maxRows ? maxRows : currentRows,
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

  componentDidMount() {
    const { isNew } = this.props;
    if(isNew) {
      this.editInput.current.focus();
      console.warn("is new");
    }
  }

  render() {
    const { isNew } = this.props;
    const { id, isDone, content } = this.props.task;
    const { isEditing, rows } = this.state;

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
          (isEditing === false && isNew === false) ? (
            <StyledTextarea
              name="content"
              placeholder="Type Your Task Here"
              value={content}
              onFocus={this.handleToggleEdit}
              onChange={this.handleChangeContent}
              rows={rows}
              isDone={isDone}
              readOnly
            />
          ) : (
            <StyledTextarea 
              name="content"
              placeholder="Type Your Task Here"
              value={this.state.content}
              onBlur={this.handleToggleEdit}
              onChange={this.handleChangeContent}
              onKeyDown={this.handleKeyDown}
              ref={this.editInput}
              rows={rows}
            />
          )
        }
        <StyledRemoveBtn onClick={this.handleRemoveBtn}></StyledRemoveBtn>
      </StyledTaskItem>
    );
  }
}

export default TaskItem;