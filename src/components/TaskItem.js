import React, { Component } from 'react';

class TaskItem extends Component {

  state = {
    isEditing: false,
    content: '',
  }

  // handleChangeDone = () {
  //   const {} = this.props.handleUpdateTask
  // }

  handleToggleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  render() {
    const { isDone, content } = this.props.task;
    const { isEditing } = this.state;

    return (
      <div>
        {
          isDone === true ? (
            <input 
              name="done"
              type="checkbox"
              checked
            />
          ) : (
            <input 
              name="done" 
              type="checkbox"
            />
          )
        }

        {
          isEditing === false ? (
            <input 
              value={content}
              onClick={this.handleToggleEdit}
              placeholder="Type Your Task Here"
              readOnly
            />
          ) : (
            <input 
              value={content} 
              placeholder="Type Your Task Here"
            />
          )
          
        }
        <button>
          { isEditing === true ? '저장' : '삭제' }
        </button>
      </div>
    );
  }
}

export default TaskItem;