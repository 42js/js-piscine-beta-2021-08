import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {
    render(){
        const {todos, onToggle, onRemove} = this.props;
        console.log(typeof onToggle);
        console.log(typeof onRemove);
        console.log(typeof todos);
        return (
            <div>
                <Item text="안녕"/>
                <Item text="hi"/>
            </div>
        );
    }
}

export default ItemList;