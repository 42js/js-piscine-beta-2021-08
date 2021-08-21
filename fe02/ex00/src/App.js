import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List';
function App () {
  const [user, setuser] = useState([]);

  useEffect(() => {
    const apiCall = async () =>{
      await axios.get('http://localhost:3000').then(function(response) {
        setuser(response.data);
      }).catch(function(error) {
        console.log(error);
      });
    };
    apiCall();
  }, []);

  return (
    <List user={user} />    
  );
}

export default App;
