import React, { Component } from 'react';
import TaskItem from './TaskItem';

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

  render() {
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
        <button onClick={this.handleClickCreateBtn}>Add New Task</button>
        {list}
      </div>
    );

  };

}

export default TaskList;