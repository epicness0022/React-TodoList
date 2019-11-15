import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }

        //SECOND METHOD USING THE NORMAL IF ELSE
        // if(this.props.todo.completed){
        //     return{ textDecoration: 'line-through' }
        // }else{
        //     return{ textDecoration: 'none' } 
        // }
        
    }

    render() {
        
        const {id , title} = this.props.todo; //This is to destructure and retrieve the value easier

        return (
            //FIRST METHOD TO ADD STYLE WITH INLINE
            // <div style={{backgroundColor: '#f4f4f4'}}>
            //     <p>{this.props.todo.title}</p>
            // </div> 

            //SECOND METHOD TO ADD WITH VARIABLES
            // <div style ={itemStyle}>
            //     <p>{this.props.todo.title}</p>
            // </div>

            //THIRD METHOD WITH A FUNCTION CALL
            <div style ={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> 
                {' '}
                {title}
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

//Proptypes
TodoItem.prototypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

//SECOND METHOD TO ADD WITH VARIABLES
// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
