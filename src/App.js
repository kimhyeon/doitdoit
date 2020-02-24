import React, { Component } from 'react';
import TaskList from './components/TaskList';

class App extends Component {

  dummyTask = [
    { key: 0, isDone: false, content: "study react"},
    { key: 1, isDone: true, content: "cokking"}
  ];

  render() {
    return (
      <div>
        <TaskList tasks={this.dummyTask}/>
      </div>
    );
  }
}

export default App;
