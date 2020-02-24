import React, { Component } from 'react';
import TaskList from './components/TaskList';
import FilterGroup from './components/FilterGroup';

class App extends Component {

  dummyTask = [
    { key: 0, isDone: false, content: "study react"},
    { key: 1, isDone: true, content: "cokking"}
  ];

  render() {
    return (
      <div>
        <FilterGroup/>
        <TaskList tasks={this.dummyTask}/>
      </div>
    );
  }
}

export default App;
