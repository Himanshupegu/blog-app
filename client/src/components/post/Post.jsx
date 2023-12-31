import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import './post.css';

const Post = ({
  _id,
  content,
  cover,
  createdAt,
  summary,
  title,
  author,
}) => {
  return (
    <div className='post'>
      <div className='image'>
        <Link to={`/post/${_id}`}>
          <img
            src={'http://localhost:4000/' + cover}
            alt=''
          />
        </Link>
      </div>
      <div className='content'>
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className='info'>
          <a
            href='#author'
            className='author'>
            {author.username}
          </a>
          <time>
            {format(new Date(createdAt), 'd MMM, yyyy HH:mm')}
          </time>
        </p>
        <p className='summary'>{summary}.</p>
      </div>
    </div>
  );
};

export default Post;
