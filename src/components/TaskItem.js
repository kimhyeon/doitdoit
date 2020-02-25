import React, { Component } from 'react';

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

  componentDidUpdate(prevProps, prevState) {
    const { id, isDone, content } = this.props.task;

    console.log("#", !prevState.isEditing, this.state.isEditing)
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
    const { isDone, content } = this.props.task;
    const { isEditing} = this.state;

    console.warn(this.props.task);

    return (
      <div>
        <input 
          name="isDone"
          type="checkbox"
          onChange={this.handleChangeCheckBox}
          checked={isDone}
        />

        {
          isEditing === false ? (
            <input
              name="content"
              value={content}
              onClick={this.handleToggleEdit}
              onChange={this.handleChangeContent}
              placeholder="Type Your Task Here"
              readOnly
            />
          ) : (
            <input 
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
      </div>
    );
  }
}

export default TaskItem;