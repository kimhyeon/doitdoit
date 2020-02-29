import React, { Component } from 'react';
import TaskList from './components/TaskList';
import FilterGroup from './components/FilterGroup';
import Header from './components/Header';

import GlobalStyles from './components/GlobalStyles';

class App extends Component {

  state = {
    filter: 'All',
    tasks: [
      // { id: "uid_1583003467204", isDone: false, content: "study react"},
      // { id: "uid_1583003467037", isDone: true, content: "cokking"}
    ]
  }

  getUID = () => {
    return `uid_${Date.now()}`;
  }

  handleChageFilter = (data) => {
    this.setState({
      filter: data
    });
  }

  handleCreateTask = async (data) => {
    const { tasks } = this.state;
    await this.setState({
      tasks: [{id: this.getUID(), ...data}].concat(tasks)
    });
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));

  }

  handleUpdateTask = async (updatedData) => {
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

    await this.setState({
      tasks: tasks.map(task => {
        if(task.id === updatedData.id) {
          return {
            ...updatedData
          }
        }
        return task;
      })
    });
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));

  }

  handleRemoveTask = async (id) => {
    const { tasks } = this.state;
    await this.setState({
      tasks: tasks.filter(task => task.id !== id)
    });
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  }

  handleRemoveDones = async () => {
    const { tasks } = this.state;
    await this.setState({
      tasks: tasks.filter(task => task.isDone === false)
    });
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  }

  componentDidMount = () => {
    const tasks = localStorage.getItem('tasks');
    if(tasks) {
      this.setState({
        tasks: JSON.parse(tasks)
      })
    } else {
      console.log('No tasks');
    }
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
