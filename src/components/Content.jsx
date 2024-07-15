
import React from 'react';

const PostContent = ({ content }) => (
  <div>
    <h4>{content.title}</h4>
    <h5>{content.body}</h5>
  </div>
);

export default PostContent;
