// src/components/Posts.js
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import PostList from './PostList';
import UserSelector from './UserContext';

const grabPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const grabUsers = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  return data;
};

const Posts = ({ onDelete, onEdit }) => {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const { data: posts, error: postsError, isLoading: postsLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: grabPosts,
  });

  const { data: users, error: usersError, isLoading: usersLoading } = useQuery({
    queryKey: ['users'],
    queryFn: grabUsers,
  });

  if (postsLoading || usersLoading) return <p>Loading...</p>;
  if (postsError) return <p>Error occured while grabbing post: {postsError.message}</p>;
  if (usersError) return <p>Error occured while grabbing user: {usersError.message}</p>;


  
  return (
    <div>
      <UserSelector users={users} onUserSelect={setSelectedUserId} />
      <PostList posts={posts} selectedUserId={selectedUserId} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
};

export default Posts;
