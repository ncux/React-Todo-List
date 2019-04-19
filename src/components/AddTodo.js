import React, { Component } from 'react';


export class AddTodo extends Component {

    state = {
        title: ''
    };

    getInputValue = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <form onSubmit={ this.onSubmit } style={{ display: 'flex' }}>
                <input onChange={ this.getInputValue } value={ this.state.title } name="title" placeholder="Add a todo" style={{ flex: '10', padding: '1rem' }}/>
                <input type="submit" value="Add todo" style={{flex: '1'}} className="button"/>

            </form>
        )
    }

    onSubmit = (e) => {
        e.preventDefault();

    }
}

export default AddTodo;