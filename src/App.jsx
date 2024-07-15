// src/App.js
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Posts from './components/Posts';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
import './App.css';

const queryClient = new QueryClient();

const App = () => {
  const [editingPost, setEditingPost] = useState(null);




  
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <h1 className="title">Data Fetching with React Query</h1>
        <AddPost />
        <Posts
          onEdit={(post) => {
            console.log('Setting editing post:', post);
            setEditingPost(post);
          }}
          onDelete={(postId) => alert(`Post ${postId} deleted`)}
        />
        {editingPost && (
          <div className="edit-post">
            <EditPost
              post={editingPost}
              onClose={() => {
                console.log('Closing edit post');
                setEditingPost(null);
              }}
            />
          </div>
        )}
      </div>
    </QueryClientProvider>
  );
};

export default App;
