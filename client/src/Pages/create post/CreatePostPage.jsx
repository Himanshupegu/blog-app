import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import './createPost.scss';
import Editor from '../../components/Editor';

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);
    ev.preventDefault();
    // console.log(files);
    const response = await fetch('http://localhost:4000/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    // console.log(await response.json());
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className='createPost'>
      <div className='content'>
        <form
          onSubmit={createNewPost}
          className='createPostForm'>
          <input
            className='createPost'
            type='title'
            placeholder={'Title'}
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
          <input
            className='createPost'
            type='summary'
            placeholder={'Summary'}
            value={summary}
            onChange={(ev) => setSummary(ev.target.value)}
          />
          <input
            className='createPost'
            type='file'
            onChange={(ev) => setFiles(ev.target.files)}
          />
          <div className='editorContainer'>
            <Editor
              className='editor'
              value={content}
              onChange={setContent}
            />
          </div>
          <button className='createBtn'>Create Post</button>
        </form>
      </div>
      <div className='menu'>
        <div className='item'>
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: 'none' }}
            type='file'
            id='file'
            name=''
            // onChange={(e) => setFile(e.target.files[0])}
          />
          {/* <label
            className='file'
            htmlFor='file'>
            Upload Image
          </label> */}
          <div className='buttons'>
            <button>Save as a draft</button>
            {/* <button onClick={handleClick}>Publish</button> */}
          </div>
        </div>
        <div className='item'>
          <h1>Category</h1>
          <div className='cat'>
            <input
              type='radio'
              // checked={cat === "art"}
              name='cat'
              value='art'
              id='art'
              // onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='art'>Art</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              // checked={cat === "science"}
              name='cat'
              value='science'
              id='science'
              // onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='science'>Science</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              // checked={cat === "technology"}
              name='cat'
              value='technology'
              id='technology'
              // onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='technology'>Technology</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              // checked={cat === "cinema"}
              name='cat'
              value='cinema'
              id='cinema'
              // onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='cinema'>Cinema</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              // checked={cat === "design"}
              name='cat'
              value='design'
              id='design'
              // onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='design'>Design</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              // checked={cat === "food"}
              name='cat'
              value='food'
              id='food'
              // onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='food'>Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPage;
