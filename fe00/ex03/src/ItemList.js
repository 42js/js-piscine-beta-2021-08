import { Component } from "react";
import Item from "./Item";

class ItemList extends Component {
    render() {
        const { todos } = this.props;
        const item = todos.map((item) => (
            <Item todo={item.text} idx={item.id} checked={item.checked} />
        ));
        return <div className="ItemList">{item}</div>;
    }
}

export default ItemList;
