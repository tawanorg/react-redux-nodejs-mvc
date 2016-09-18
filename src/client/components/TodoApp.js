import React from 'react';
import 'whatwg-fetch';
import styles from './TodoAppStyles.css';
import Config from '../constants';

export default class TodoApp extends React.Component {
  constructor(props) {
    super()
    this.state = {
      todos: [],
      newTodo: '',
    };
    this.toggle = this.toggle.bind(this);
    this.delete = this.delete.bind(this);
    this.add = this.add.bind(this);
    this.newTodoChange = this.newTodoChange.bind(this);
  }

  componentDidMount() {
    fetch(Config.API_URL+'/todo').then((data) => data.json()).then((data) => {this.setState({todos: data})})
  }

  toggle(id) {
    fetch(Config.API_URL+'/todo/'+id+'/toggle', {method: 'POST'})
    .then(() => fetch(Config.API_URL+'/todo')).then((data) => data.json()).then((data) => {this.setState({todos: data})})
  }

  delete(id,e) {
    fetch(Config.API_URL+'/todo/'+id, {method: 'DELETE'})
    .then(() => fetch(Config.API_URL+'/todo')).then((data) => data.json()).then((data) => {this.setState({todos: data})})
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  add(title) {
    fetch(Config.API_URL+'/todo', {method: 'POST',headers:{'Content-Type': 'application/json'},body:JSON.stringify({title:title})})
    .then(() => fetch(Config.API_URL+'/todo')).then((data) => data.json()).then((data) => {this.setState({todos: data,newTodo:''})})
  }

  newTodoChange(e) {
    this.setState({newTodo: e.target.value})
  }

  render() {
    return (<div>
        <div>
        <input type="text" onChange={this.newTodoChange} value={this.state.newTodo} />
        <button onClick={this.add.bind(this, this.state.newTodo)}>Add</button>
        </div>
        <ul>
          {
            this.state.todos && this.state.todos.map(
              (todo, key) =>
                <li key={key} className={todo.done ? styles.linethrough : styles.initial}
                  onClick={this.toggle.bind(this,todo._id)}>
                  {todo.title}
                  <button onClick={this.delete.bind(this,todo._id)}>Delete</button>
                </li>
              )
          }
        </ul>
      </div>
    )
  }

}
