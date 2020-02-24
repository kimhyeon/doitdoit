import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {

  defaultProps = {
    tasks: []
  }

  render() {

    const { tasks } = this.props;
    const list = tasks.map((task) => {
      return (<TaskItem task={task}/>)
    });

    return (
      <div>
        {list}
      </div>
    );

  };

}

export default TaskList;