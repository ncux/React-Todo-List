import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {

    getStyle() {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px solid #cccccc',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        };
    }


    render() {

        const { id, title } = this.props.todo;

        return (
            <ul style={ this.getStyle() }>
                <li className="listStyle">
                    <input type="checkbox" onChange={ this.props.markCompleted.bind(this, id) }/>
                    { '' } <p>{ title }</p>
                    <button onClick={ this.props.deleteTodo.bind(this, id) } style={ buttonStyle }>X</button>
                </li>
            </ul>
        )
    }

}


// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markCompleted: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
};


const buttonStyle = {
    background: '#ff0000',
    color: '#ffffff',
    border: 'none',
    padding: '5px 5px',
    marginBottom: '2rem',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
};

const itemStyle = {
    backgroundColor: '#f4f4f4'
};


export default TodoItem;
