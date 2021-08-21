import React from "react";
import './Item.css'
class Item extends React.Component {
    render() {
        var {name, person, type, avatar_url} = this.props;
        console.log(avatar_url);
        try{
            person = person['email'];
        }
        catch{
            return (
                <div className="item">
                유저네임: {name}<br/>
                유저종류: {type}<br/>
                전자우편: 없지롱<br/>
                <img src={avatar_url} height={100} width={100} alt=""/><br/>
                </div> 
            );
        }
        return (
            <div className="item">
                유저네임: {name}<br/>
                유저종류: {type}<br/>
                전자우편: {person}<br/>
                <img src={avatar_url} height={100} width={100} alt=""/><br/>
            </div>
        );
    }
}
export default Item;