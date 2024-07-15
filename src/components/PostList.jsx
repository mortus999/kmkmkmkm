import React, { useMemo } from 'react';
import PostContent from './Content';

const PostList = ({ posts, selectedUserId, onEdit, onDelete }) => {

  const filteredPosts = useMemo(() => {
    return selectedUserId ? posts.filter(post => post.userId === selectedUserId) : posts;
  }, [posts, selectedUserId]);




  
  return (
    <div>
      {filteredPosts.map(post => (
        <div key={post.id}>
          <PostContent content={post} />
          <button onClick={() => onEdit(post)}>Edit</button>
          <button onClick={() => onDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;