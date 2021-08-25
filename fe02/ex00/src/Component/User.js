import React from 'react';

const User = ({id, name, type, email, avatar_url}) => {
  email = email ? email : 'no email';
  const avatar = avatar_url
    ? <img src={avatar_url} alt='profile' width='50'/>
    : 'no avatar';

  return (
    <li>
      <ul>id: {id}</ul>
      <ul>name: {name}</ul>
      <ul>type: {type}</ul>
      <ul>email: {email}</ul>
      <ul>avatar: {avatar}</ul>
    </li>
  )
}

export default User;