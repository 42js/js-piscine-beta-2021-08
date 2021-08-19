import { Component } from "react";
import "./Item.css";

class Item extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        //console.log("check", this.props, nextProps);
        if (this.props.idx !== nextProps.idx) return true;
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const { todo, idx, checked, onClickRm, onClickCheck } = this.props;
        console.log("change", todo);
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
