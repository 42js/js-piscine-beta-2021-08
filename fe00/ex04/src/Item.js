import { Component } from "react";
import "./Item.css";

class Item extends Component {
    render() {
        const { todo, idx, checked, onClickRm, onClickCheck } = this.props;
        return (
            <section
                dataId={idx}
                onMouseOver={(e) => {
                    e.currentTarget.children[1].hidden = false;
                }}
                onMouseOut={(e) => {
                    e.currentTarget.children[1].hidden = true;
                }}
                onClick={(e) => {
                    onClickCheck(idx);
                }}
            >
                <div className={checked ? "checked" : ""}>{todo}</div>
                <button
                    className="todoBtn"
                    onClick={(e) => {
                        e.stopPropagation();
                        onClickRm(idx);
                    }}
                    hidden
                >
                    DEL
                </button>
            </section>
        );
    }
}

export default Item;
