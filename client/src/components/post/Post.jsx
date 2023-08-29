import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import './post.scss';



const Post = ({
  _id,
  content,
  cover,
  createdAt,
  summary,
  title,
  author,
}) => {
  // const boxes = document.querySelectorAll('.card');
  // const checkBoxes = () => {
  //   const triggerBottom = (window.innerHeight / 5) * 4;
  //   boxes.forEach((card) => {
  //     const boxTop = card.getBoundingClientRect().top;
  //     if (boxTop < triggerBottom) card.classList.add('show');
  //     else card.classList.remove('show');
  //   });
  // };

  // window.addEventListener('scroll', checkBoxes);
  // checkBoxes();
  return (
    <div className='card'>
      <div className='card-container'>
        <div className='img-container'>
          <Link to={`/post/${_id}`}>
            <img
              src={'http://localhost:4000/' + cover}
              alt=''
            />
          </Link>
        </div>
        <div className='card-content'>
          <div className='card-title'>
            <Link to={`/post/${_id}`}>
              <h2>{title}</h2>
            </Link>
          </div>
          <div className='card-body'>
            <p className='info'>
              <a
                href='#author'
                className='author'>
                @{author.username}
              </a>
              <time>
                {format(new Date(createdAt), 'd MMM, yyyy HH:mm')}
              </time>
            </p>
            <p className='card-description'>{summary}.</p>
            {/* <button>Read More</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
