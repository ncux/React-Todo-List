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

    // markCompleted = (e) => {
    //     console.log(this.props);
    // };

    render() {

        return (
            <div style={ this.getStyle() }>
                <h4>{ this.props.todo.title }</h4> { '  ' } <input type="checkbox" onChange={this.props.markCompleted}/>

            </div>
        )
    }

}


// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

const itemStyle = {
    backgroundColor: '#f4f4f4'
};


export default TodoItem;
