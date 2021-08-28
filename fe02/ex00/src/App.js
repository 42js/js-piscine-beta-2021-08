import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setError(null);
        setUser(null);
        setLoading(true);

        const getData = await axios.get("https://cors-anywhere.herokuapp.com/https://api.notion.com/v1/users", {
					headers: {
						"Authorization": `Bearer ${process.env.REACT_APP_NOTION_KEY}`,
						"Notion-Version": "2021-08-16",
					}
				});
				setUser(getData.data.results);
      } catch (e)  {
        setError(e);
      }
      setLoading(false);
    };
    
    fetchUser();
  }, []);
  
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!user) return null;
  return (
		<div>
			{user ? user.map((data) => (
				<ul>
					{data.avatar_url ?
						<img src={data.avatar_url} alt="profile" key={`${data.id}0`}></img>
						: <div><img src="https://w.namu.la/s/c9b951140de72f66425f2f5523cd2a4aa0a796a5c67e4c8363782e249d58f9d4fbbd977b1c6fd8d0fcecf5ee70a146619ee15c502a074c547f931384a97d69e5e148434c9eb2f2190b71eceafe3e5dd3da71dca5719c1e1b69bd7dea84df60df"/></div> }
					<li key={`${data.id}1`}>유저명: {data.name}</li>
					<li key={`${data.id}2`}>e-mail: {data.person? data.person.email : 'e-mail 정보가 존재하지 않습니다.'}</li>
					<li key={`${data.id}3`}>type: {data.type}</li>
				</ul>
			)) : '유저 정보가 없습니다.'}
		</div>
	)
}

export default App;
