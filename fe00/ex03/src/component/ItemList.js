import react from 'react';
import Item from './Item'

class ItemList extends react.Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;
        const todoList = todos.map(
            ({id, text, time, checked}) => (
                <Item 
                id = {id}
                text={text}
                time={time}
                checked={checked}
                onToggle={onToggle}
                onRemove={onRemove}
                key={id}
                />
            )
        );
        return (
            <section className="app_display">
                {todoList}
            </section>
        );
    }
}

export default ItemList;