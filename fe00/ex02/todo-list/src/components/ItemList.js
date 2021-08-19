import React, { Component } from 'react';
import Item from './Item';

// 3가지 component를 받게된다.
// 1. todos: todo 객체들이 들어있는 배열
// 2. onToggle: 체크박스를 키고 끄는 함수
// 3. onRemove: 아이템을 삭제시키는 함수
class ItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;
    return (
      <div>
        <Item text="리액트 공부" />
        <Item text="Node.js 공부" />
        <Item text="리애 먹기" />
      </div>
    );
  }
}

export default ItemList;
