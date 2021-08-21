import React from 'react'

const UserItem = ({name, email, type, profileImage}) => {
    console.log(email);
    return (
        <ul>
            <li>Name: {name}</li>
            <li>Email: {email ? email : '없음'}</li>
            <li>User Type: {type}</li>
            {profileImage ? <li>Profile Image: <img src={profileImage} alt="profile_image"/></li> : <li>Profile Image: 없음</li>}
        </ul>
    )
}

export default UserItem;
