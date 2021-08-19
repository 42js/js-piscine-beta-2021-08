import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {
  // update에 영향을 끼칠때만 rerendering하도록
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  // 3가지 component를 받게된다.
  // 1. todos: todo 객체들이 들어있는 배열
  // 2. onToggle: 체크박스를 키고 끄는 함수
  // 3. onRemove: 아이템을 삭제시키는 함수
  render() {
    const { todos, onToggle, onRemove } = this.props;
    const itemList = todos.map(({ id, text, checked }) => (
      <Item
        id={id}
        text={text}
        checked={checked}
        onToggle={onToggle}
        onRemove={onRemove}
        key={id}
      />
    ));

    return <div>{itemList}</div>;
  }
}

export default ItemList;
