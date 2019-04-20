import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Axios from 'axios';

import AboutPage from './components/pages/About';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

import './App.css';

class App extends Component {

  state = {
    todos: []
  };


  todosUrl = `https://jsonplaceholder.typicode.com/todos`;


  async componentDidMount() {
    let data = await Axios.get(`${this.todosUrl}?_limit=10`);
    // console.log(data);
    let todos = data.data;
    console.log(todos);
    this.setState({ todos: todos });
  }


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
  deleteTodo = async id => {
    // console.log(id);
    await Axios.delete(`${this.todosUrl}/${id}`);
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  };


  // add a new todo
  addNewTodo = async title => {
    console.log(title);
    const response = await Axios.post(this.todosUrl, { title: title, completed: false });
    this.setState({ todos: [...this.state.todos, response.data] });
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
