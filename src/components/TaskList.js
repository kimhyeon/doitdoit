import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {

  static defaultProps = {
    tasks: []
  }

  render() {

    const { tasks } = this.props;
    const list = tasks.map((task) => {
      return (<TaskItem key={task.key} task={task}/>)
    });

    return (
      <div>
        {list}
      </div>
    );

  };

}

export default TaskList;