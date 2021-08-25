import axios from 'axios';

// const client = axios.create();

const getUsers = async () => {
  const res = await axios.get('http://localhost:4000');
  return res.data.results.map((profile, i) => ({
      id: profile.id,
      name: profile.name,
      email: (() => {
        if (profile.type === 'person') return profile.person.email;
        return null;
      })(),
      type: profile.type,
      avatar_url: profile.avatar_url,
      key: i
  }));
};

export { getUsers };