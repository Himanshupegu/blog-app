import React from 'react'

const Post = () => {
  return (
    <div className='post'>
    <div className='image'>
      <img
        src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1560955053i/44421460.jpg'
        alt=''
      />
    </div>
    <div className='content'>
      <h2>Before the Coffee Gets Cold</h2>
      <p className='info'>
        <a
          href='#author'
          className='author'>
          Toshikazu Kawaguchi
        </a>
        <time>22-07-2023 12:18 AM</time>
      </p>
      <p className='summary'>In a small back alley in Tokyo, there is a café which has been serving carefully brewed coffee for more than one hundred years. But this coffee shop offers its customers a unique experience: the chance to travel back in time.</p>
    </div>
  </div>
  )
}

export default Post