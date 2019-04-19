import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {

  state = {
    todos: [
      { id: 1, title: 'Todo one', completed: false },
      { id: 2, title: 'Todo two', completed: false },
      { id: 3, title: 'Todo three', completed: false },
      { id: 4, title: 'Todo four', completed: true },
      { id: 5, title: 'Todo five', completed: false }
    ]
  };

  render() {
    console.log(this.state.todos);

    return (
      <div className="App">

        <Todos todos={this.state.todos}></Todos>


      </div>
    );
  }
}

export default App;
