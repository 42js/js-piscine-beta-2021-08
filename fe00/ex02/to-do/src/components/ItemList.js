import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {
    render(){
        const {todos} = this.props;
        return (
            <div>
                <Item text="안녕"/>
                <Item text="hi"/>
            </div>
        );
    }
}

export default ItemList;
