import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserItem from './UserItem';

const UserList = () => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setError(null);
                setUsers(null);
                setLoading(false);
                const response = await axios.get('https://cors-anywhere.herokuapp.com/https://api.notion.com/v1/users', {
                    headers: {
                        'Authorization': `Bearer ${process.env.REACT_APP_NOTION_API_KEY}`,
                        'Notion-Version': '2021-05-13'
                    }
                });
                setUsers(response.data.results);
                console.log(response.data.results);
            }
            catch (e) {
                setError(e);
            }
            setLoading(false);
        }

        fetchUsers();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러 발생</div>
    if (!users) return null;
    return (
        <div>
            {users.map((user) => (
            <UserItem
                key={user.id}
                name={user.name}
                email={user.person?.email}
                type={user.type}
                profileImage={user.avatar_url}
            >
                {user.name}
            </UserItem>))}
        </div>
    )
}

export default UserList;
