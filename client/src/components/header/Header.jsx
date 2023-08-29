import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import './header.scss';
import { userContext } from '../../userContext';
import Logo from '../../asset/salt.png';
// import Logo2 from '../../asset/saltit.png'

const Header = () => {
  const { setUserInfo, userInfo } = useContext(userContext);

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((userInfo) => {
        setUserInfo(userInfo);
      })
      .catch((error) => {
        console.error('Fetch profile error:', error);
      });
  }, [setUserInfo]);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setUserInfo(null);
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  }

  // useEffect(() => {
  //   fetch('http://localhost:4000/profile', {
  //     credentials: 'include',
  //   }).then((response) => {
  //     response.json().then((userInfo) => {
  //       setUserInfo(userInfo);
  //     });
  //   });
  //   // eslint-disable-next-line
  // }, []);

  // function logout() {
  //   fetch('http://localhost:4000/logout', {
  //     credentials: 'include',
  //     method: 'POST',
  //   });
  //   setUserInfo(null);
  // }

  const username = userInfo?.username;

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <Link to='/'>
            <img
              src={Logo}
              alt=''
            />
          </Link>
        </div>
        <div className='links'>
          <Link
            className='link'
            to='/?cat=art'>
            <h6>Art</h6>
          </Link>
          <Link
            className='link'
            to='/?cat=science'>
            <h6>Science</h6>
          </Link>
          <Link
            className='link'
            to='/?cat=technology'>
            <h6>Technology</h6>
          </Link>
          <Link
            className='link'
            to='/?cat=entertainment'>
            <h6>Entertainment</h6>
          </Link>
          <Link
            className='link'
            to='/?cat=design'>
            <h6>Design</h6>
          </Link>
          <Link
            className='link'
            to='/?cat=food'>
            <h6>Food</h6>
          </Link>
          {!username ? (
            <>
              <Link
                className='link'
                to='/login'>
                Login
              </Link>
            </>
          ) : (
            <>
              {/* eslint-disable-next-line */}
              <a
                className='link'
                onClick={logout}>
                {username} Logout
              </a>
            </>
          )}
          {username && (
            <>
              <span className='write'>
                <Link
                  to='/create'
                  className='saltIt'>
                  salt it
                </Link>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
