import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const getData = await axios.get("https://cors-anywhere.herokuapp.com/https://api.notion.com/v1/users", {
					headers: {
						"Authorization": `Bearer ${process.env.REACT_APP_TOKEN}`,
						"Notion-Version": "2021-08-28",
					}
				});
				setUser(getData.data.results);
      } catch (e)  {
        console.log(e);
      }
    };
    
    fetchUser();
  }, []);
  
  console.log(user);
  return (
		<div>
			{user ? user.map((data) => (
				<ul>
					{data.avatar_url ?
						<img src={data.avatar_url} alt="profile" key={`${data.id}0`}></img>
						: <div></div> }
					<li key={`${data.id}1`}>유저명: {data.name}</li>
					<li key={`${data.id}2`}>e-mail: {data.person? data.person.email : 'e-mail 정보가 존재하지 않습니다.'}</li>
					<li key={`${data.id}3`}>type: {data.type}</li>
				</ul>
			)) : '유저 정보가 없습니다.'}
		</div>
	)
}

export default App;
