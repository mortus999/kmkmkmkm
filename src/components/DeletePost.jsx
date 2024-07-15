import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';


const deletePost = async (postId) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
};

const DeletePost = ({ postId }) => {
  const queryClient = useQueryClient();

 
  const mutation = useMutation({
    mutationFn: () => deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      alert('Post deleted successfully');
    },
  });



  
  return (
    <button onClick={() => mutation.mutate()}>Delete</button>
  );
};

export default DeletePost;