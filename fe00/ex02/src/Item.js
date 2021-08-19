import { Component } from "react";
import "./Item.css";

class Item extends Component {
    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
        this.state = {
            isHovering: false,
        };
    }
    handleHover() {}
    render() {
        const todo = ["리액트 공부", "FE00끝내기", "알고리즘 공부"];
        const todoList = todo.map((item, idx) => (
            <section
                dataId={idx}
                onMouseOver={(e) => {
                    console.log((e.currentTarget.children[1].hidden = false));
                }}
                onMouseOut={(e) => {
                    console.log((e.currentTarget.children[1].hidden = true));
                }}
            >
                <div>{item}</div>
                <button className="todoBtn" hidden>
                    DEL
                </button>
            </section>
        ));
        return <div className="Item">{todoList}</div>;
    }
}

export default Item;
