import React, { Component } from 'react';
import TaskList from './components/TaskList';
import FilterGroup from './components/FilterGroup';
import Header from './components/Header';

class App extends Component {

  id = 2;

  state = {
    filter: 'all',
    tasks: [
      { id: 0, isDone: false, content: "study react"},
      { id: 1, isDone: true, content: "cokking"}
    ]
  }

  handleChageFilter = (data) => {
    this.setState({
      filter: data
    });
  }

  handleCreateTask = (data) => {
    const { tasks } = this.state;
    this.setState({
      tasks: [{id: this.id, ...data}].concat(tasks)
    });
  }

  // RE!!!
  handleUpdateTask = (id, data) => {
    const { tasks } = this.state;
    this.setState({
      state: tasks.map(task => {
        if(task.id === id) {
          return {
            id,
            ...data
          }
        }
        return task;
      })
    });
  }

  render() {
    return (
      <div>
        <Header filter={this.state.filter} handleChageFilter={this.handleChageFilter}/>
        <TaskList 
          tasks={this.state.tasks}
          handleCreateTask={this.handleCreateTask}
          handleUpdateTask={this.handleUpdateTask}
        />
      </div>
    );
  }
}

export default App;
