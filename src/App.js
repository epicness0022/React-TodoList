import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Header from './components/layout/Header';
import Axios from 'axios';

class App extends Component {
  state = {
    todos : [


      // {
      //   id : 1,
      //   title: "Take out the trash",
      //   completed: false
      // },
      // {
      //   id : 2,
      //   title: "Dinner",
      //   completed: true
      // },
      // {
      //   id : 3,
      //   title: "Meeting with client",
      //   completed: false
      // }
    ]
  }

  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data }))
  }

  markComplete = (id) => {
    this.setState( this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    }));
  }

  //Delete TODO
  delTodo = (id) => {
    Axios.delete("https://jsonplaceholder.typicode.com/todos/${id}")
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
    
    
  }

  addTodo = (title) => {
    // const newTodo = {
    //   id: 4,
    //   title,
    //   completed: false
    // }
    Axios.post("https://jsonplaceholder.typicode.com/todos",{
      title,
      completed: false
    })
    .then(res => this.setState({todos: [...this.state.todos, res.data]}));
    
  }

  //console.log(state.todos)
  render(){
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path='/' render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete = {this.markComplete}
              delTodo={this.delTodo}/>
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
  
  }
}

export default App;
