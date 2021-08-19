import React, { Component } from 'react';
import TodoListTemplate from './ToDoListTemplate';
import Input from './input';
import { ItemList } from './item';

class App extends Component {

	id = 3

	state = {
		input: '',
		todos: [
			{ id: 0, text: '발톱 깎기', checked: false },
			{ id: 1, text: '육회비빔밥 먹기', checked: true },
			{ id: 2, text: 'fe00 100점 달성하기', checked: false }
		]
	}

	handleChange = (e) => {
		this.setState({
			input: e.target.value // input 의 다음 바뀔 값
		});
	}
	
	handleCreate = () => {
		const { input, todos } = this.state;
		this.setState({
			input: '', // 인풋 비우고
			// concat 을 사용하여 배열에 추가
			todos: todos.concat({
				id: this.id++,
				text: input,
				checked: false
		  	})
		});
	}
	
	handleKeyPress = (e) => {
		// 눌려진 키가 Enter 면 handleCreate 호출
		if(e.key === 'Enter') {
			this.handleCreate();
		}
	}

  	render() {
		const { input, todos } = this.state;
		const {
			handleChange,
			handleCreate,
			handleKeyPress
		} = this;

    	return (
			<TodoListTemplate form={(<Input
				value = {input}
				onKeyPress = {handleKeyPress}
				onChange = {handleChange}
				onCreate = {handleCreate}
				/>
			)}>
				<ItemList todos={todos}></ItemList>
			</TodoListTemplate>
		);
  	}
}

export default App;