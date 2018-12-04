import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addNewTodo } from './redux/actions/todos';
import { getAllUsers} from './redux/actions/users';
import { bindActionCreators } from 'redux';

class App extends Component {

  state = {
    newTodo: ''
  }

  componentDidMount = () => {
    this.props.getAllUsers();
  }

  handleOnChange = (event) => {
    const value = event.target.value;
    this.setState((previousState,props) => ({ newTodo: value}));
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addNewTodo(this.state.newTodo);
    this.setState((previousState,props) => ({ newTodo: ''}));
  }

  render() {
    console.log('this.props: ', this.props);

    let todosList = this.props.todoReducerState.todos.map((todo,i) => {
      return (
        <li key={i}>{todo}</li>
      )
    });
    
    let userList = this.props.userReducerState.map((user,i) => {
      return (
        <li key={user.id+'#'}>{user.name}</li>
      )
    });

    return (
      <div className="App">
        <form onSubmit={this.handleOnSubmit}>
          <div className="App">
            <input
              type="text"
              defaultValue={this.state.newTodo}
              onChange={this.handleOnChange}
            />
            <button type="submit">Submit</button>
          </div>
        </form>

        <h2>List of todos</h2>
        <ul>
          {todosList}
        </ul>

        <h2>List of users</h2>
        <ul>
          {userList}
        </ul>
      </div>
    );
  }
}

let mapStateToProps = (state) => {

  console.log('state in mstp: ',state);

  return {
    todoReducerState: state.todoReducerState,
    userReducerState: state.userReducerState
  }
}

let mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({addNewTodo,getAllUsers}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
