import React, { Component } from 'react';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
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

  // toggles the state of a todo
  markCompleted = (id) => {
    console.log('cumshot! from App.js ' + id);
    this.setState( { todos: this.state.todos.map(todo => {
      if(todo.id == id) {
        todo.completed = !todo.completed;
      }
      return todo;
      }) } );
  };

  // delete todo
  deleteTodo = (id) => {
    // console.log(id);
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  };

  render() {
    console.log(this.state.todos);

    return (
      <div className="App">

        <div className="container">

          <AddTodo />
          <Header />

          <Todos todos={this.state.todos} markCompleted={this.markCompleted} deleteTodo={ this.deleteTodo } />

        </div>




      </div>
    );
  }
}

export default App;
