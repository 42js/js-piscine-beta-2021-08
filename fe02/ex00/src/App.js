import React, { useState, useEffect } from 'react';
import axios from 'axios';

async function App() {

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

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return null;
  return (
    <ul>
      {user.map(user => (
        <li key={user.id}>
          {user.username} ({user.name})
        </li>
      ))}
    </ul>
  )
}

export default App;
