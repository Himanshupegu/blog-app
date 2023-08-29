import React, { useEffect, useState } from 'react';
import Post from '../../components/post/Post';
import './homePage.scss'

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/post').then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    }, []);
  });
  return (
    <div className='home-page'>
      {posts.length > 0 &&
        posts.map((post) => (
          <Post
            key={post._id}
            {...post}
          />
        ))}
    </div>
  );
};

export default HomePage;
