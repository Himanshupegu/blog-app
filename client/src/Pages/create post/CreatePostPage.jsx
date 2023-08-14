import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import {Navigate} from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import './createPost.css';

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
    ['clean'],
  ],
};

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
      <ReactQuill
        value={content}
        modules={modules}
        onChange={(newValue) => setContent(newValue)}
      />
      <button className='createBtn'>Create Post</button>
    </form>
  );
};

export default CreatePostPage;
