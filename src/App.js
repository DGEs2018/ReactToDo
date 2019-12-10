import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
export default class App extends Component {
	constructor() {
		super();
		this.state = {
			message: 'Hey newbie dev !!',
			newTodo: '',
			todos: [
				{
					title: 'Learn TypeScript',
					achieved: false
				},
				{
					title: 'Learn GraphQL',
					achieved: false
				}
			] // create an array property on the state for todos
		};
		// this.formSubmitted = this.formSubmitted.bind(this);  (when an instance is created, this would totally be bound)
		// another possibility is to bind the above, and leave just the 'this.formSubmitted' below
	}
	formSubmitted(event) {
		event.preventDefault();
		this.setState({
			newToDo: '',
			todos: [
				...this.state.todos,
				// but we want to make a copy of it, and not directly change it, hence the spread operator

				{
					title: this.state.newToDo,
					achieved: false
				}
			]
		});
		// const todos = this.state.todos.slice(); this 8 lines long block of code would accomplish
		// todos.push({                             // but is wrong as we don't directly have to modify or change directly
		//   title: this.state.newTodo,
		//   achieved: false
		// });
		// this.setState({
		//   todos
		// })
		// console.log(this.state.newTodo); // this only logs whatsoever is desired to the console window
	}
	newToDoUpdated(event) {
		// console.log(event.target.value);
		this.setState({
			newTodo: event.target.value
		});
	}
	render() {
		return (
			<div>
				<h3>{this.state.message}</h3>
				<form onSubmit={(event) => this.formSubmitted(event)}>
					{/*2nd alternative, this.formSubmitted.bind(this)*/}
					<label htmlFor="toDo">React: to-do example</label>
					<input onChange={(event) => this.newToDoUpdated(event)} id="toDo" name="toDo" />
					<button type="submit">Add more</button>
				</form>
				<ul>
					{this.state.todos.map((todo) => {
						return <li key={todo.title}>{todo.title}</li>;
					})}
					{/* the .map method above will map an array of objects to an array of JSX */}
				</ul>
			</div>
		);
	}
}
