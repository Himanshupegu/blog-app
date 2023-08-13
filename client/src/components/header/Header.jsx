import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import './header.css';
import { userContext } from '../../userContext';

const Header = () => {
  const { setUserInfo, userInfo } = useContext(userContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
    // eslint-disable-next-line
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link
        to='/'
        className='logo'>
        MYPBlog
      </Link>
      <nav>
        {username && (
          <>
            <Link to='/create'>Create new post</Link>
            {/* eslint-disable-next-line */}
            <a onClick={logout}>Logout ({username})</a>
          </>
        )}
        {!username && (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
