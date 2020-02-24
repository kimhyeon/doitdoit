import React, { Component } from 'react';

class TaskItem extends Component {

  

  render() {
    const { isDone, content } = this.props.task;
    return (
      <div>
        {
          isDone === true ? 
          <input name="done" type="checkbox" checked/>
          :
          <input name="done" type="checkbox"/>
        }
        <span>{content}</span>
        <button>삭제</button>
      </div>
    );
  }
}

export default TaskItem;