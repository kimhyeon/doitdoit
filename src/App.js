import React, { Component } from 'react';
import TaskList from './components/TaskList';
import FilterGroup from './components/FilterGroup';
import Header from './components/Header';

import GlobalStyles from './components/GlobalStyles';

class App extends Component {

  id = 2;

  state = {
    filter: 'All',
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
      tasks: [{id: this.id++, ...data}].concat(tasks)
    });
  }

  handleUpdateTask = (updatedData) => {
    const { tasks } = this.state;

    let test = tasks.map(task => {
      if(task.id === updatedData.id) {
        return {
          ...updatedData
        }
      }
      return task;
    });

    console.log("test", updatedData, test);

    this.setState({
      tasks: tasks.map(task => {
        if(task.id === updatedData.id) {
          return {
            ...updatedData
          }
        }
        return task;
      })
    });
  }

  handleRemoveTask = (id) => {
    const { tasks } = this.state;
    this.setState({
      tasks: tasks.filter(task => task.id !== id)
    });
  }

  handleRemoveDones = () => {
    const { tasks } = this.state;
    this.setState({
      tasks: tasks.filter(task => task.isDone === false)
    });
  }

  render() {
    const { tasks, filter } = this.state;

    let filteredTask = tasks.filter((task) => {
      if(filter === 'All') {
        return task;
      } else if(filter === 'Task') {
        return task.isDone === false;
      } else {
        return task.isDone === true;
      }
    });

    return (
      <div>
        <GlobalStyles />
        <Header
          filter={this.state.filter}
          handleChageFilter={this.handleChageFilter}
        />
        <TaskList 
          tasks={filteredTask}
          handleCreateTask={this.handleCreateTask}
          handleUpdateTask={this.handleUpdateTask}
          handleRemoveTask={this.handleRemoveTask}
          handleRemoveDones={this.handleRemoveDones}
        />
      </div>
    );
  }
}

export default App;
