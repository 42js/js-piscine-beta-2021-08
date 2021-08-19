import { Component } from "react";
import Item from "./Item";

class ItemList extends Component {
    render() {
        const { todos, onClickRm, onClickCheck } = this.props;
        const item = todos.map((item) => (
            <Item
                todo={item.text}
                idx={item.id}
                checked={item.checked}
                onClickRm={onClickRm}
                onClickCheck={onClickCheck}
            />
        ));
        return <div className="ItemList">{item}</div>;
    }
}

export default ItemList;
