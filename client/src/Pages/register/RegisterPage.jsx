import React, { useState } from 'react';
import { Link } from "react-router-dom";
const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      alert('Registration Successful');
    } else {
      alert('Registration Failed (Username taken)');
    }
  }

  return (
    <div className='loginForm'>
      <form onSubmit={register}>
        <h1>Register</h1>
        <input
          required
          type='text'
          placeholder='username'
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          required
          type='email'
          placeholder='email'
          name='email'
          // value={email}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button>Register</button>
        <span>
          Do you have an account? <Link to='/login'>Login</Link>
        </span>
      </form>
    </div>
  );
};

export default RegisterPage;
