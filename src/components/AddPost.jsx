// src/components/AddPost.js
import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const createPost = async (newPost) => {
  const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
  console.log('Post created:', data); 
  return data;
};

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      console.log('Post creation successful'); 
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { head, body }); 
    mutation.mutate({ title, body });
  };




  

  return (
    <form onSubmit={handleSubmit} className='submit'>
      <div>
        <label>Head: </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Body: </label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPost;
