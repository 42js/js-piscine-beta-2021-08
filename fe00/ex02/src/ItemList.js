import { Component } from "react";
import Item from "./Item";

class ItemList extends Component {
    render() {
        return (
            <div className="ItemList">
                <Item />
            </div>
        );
    }
}

export default ItemList;
