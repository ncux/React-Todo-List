import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AboutPage from './components/pages/About';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

import './App.css';

class App extends Component {

  state = {
    todos: [
      // { id: 1, title: 'Todo one', completed: false },
      // { id: 2, title: 'Todo two', completed: false },
      // { id: 3, title: 'Todo three', completed: false },
      // { id: 4, title: 'Todo four', completed: true },
      // { id: 5, title: 'Todo five', completed: false }
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


  // add a new todo
  addNewTodo = title => {
    console.log(title);
    const newTodo = { id: this.state.todos.length + 1, title: title, completed: false };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };


  render() {

    return (

        <Router>

          <div className="App">

            <div className="container">

              <Header />

              <Route exact path="/" render={ props => (
                  <React.Fragment>
                    <AddTodo addNewTodo={ this.addNewTodo } />
                    <Todos todos={this.state.todos} markCompleted={this.markCompleted} deleteTodo={ this.deleteTodo } />
                  </React.Fragment>
              ) }/>

              <Route path="/about" component={ AboutPage }/>

            </div>

          </div>

        </Router>

    );
  }
}

export default App;
