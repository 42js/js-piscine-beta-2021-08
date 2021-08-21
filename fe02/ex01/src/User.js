import getNotionApi from "./notionApi";
import { useEffect, useState } from "react";
import "./User.css";

function User() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        let mounted = true;
        getNotionApi().then((items) => {
            if (mounted) {
                setUsers(items);
            }
        });
        return () => (mounted = false); //cleanup함수.
    }, []); //비워지면, 컴포넌트가 처음 나타날때만 함수 호출됨

    if (users)
        return (
            <ul className="userList">
                {users.map((item) => {
                    let profileImg = item.avatar_url
                        ? item.avatar_url
                        : "이미지가 없음";
                    let mail = item.person ? item.person.email : "메일이 없음";
                    return (
                        <li>
                            <div>
                                <p>ID : {item.name} </p>
                                <p>Email: {mail} </p>
                                <p>User Type: {item.type} </p>
                            </div>
                            <img src={profileImg} alt=""></img>
                        </li>
                    );
                })}
            </ul>
        );
    else return <div>로딩중...</div>;
}

export default User;
