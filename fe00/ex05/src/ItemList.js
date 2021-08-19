import { Component } from "react";
import Item from "./Item";

class ItemList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }
    render() {
        const { todos, onClickRm, onClickCheck } = this.props;
        //console.log(todos);
        const item = todos.map((item) => (
            <Item
                todo={item.text}
                idx={item.id}
                checked={item.checked}
                onClickRm={onClickRm}
                onClickCheck={onClickCheck}
            />
        ));
        //item.forEach((i) => {
        //console.log(i.props.idx);
        //});
        return <div className="ItemList">{item}</div>;
    }
}

export default ItemList;
