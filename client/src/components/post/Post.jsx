import React from 'react';
import { format } from 'date-fns';
import './post.css';

const Post = ({
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
        <img
          src={'http://localhost:4000/' + cover}
          alt=''
        />
      </div>
      <div className='content'>
        <h2>{title}</h2>
        <p className='info'>
          <a
            href='#author'
            className='author'>
            {author.username}
          </a>
          <time>
            {format(new Date(createdAt), 'MMM d, yyyy HH:mm')}
          </time>
        </p>
        <p className='summary'>{summary}.</p>
      </div>
    </div>
  );
};

export default Post;
