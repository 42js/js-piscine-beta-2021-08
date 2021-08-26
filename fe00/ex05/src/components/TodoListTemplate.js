import React, {Component} from 'react';
import './TodoListTemplate.css';


class TodoListTemplate extends Component{
    render(){
        const {form, children} = this.props;
        return (
            <main className='todolist'>
                <div className='title'>
                    ToDoList
                </div>
                <section className='input'>
                    {form}
                </section>
                <section className='content'>
                    {children}
                </section>
            </main>
        );
    }
}

export default TodoListTemplate;