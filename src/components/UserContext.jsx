// src/components/UserContext.js
import React from 'react';

const UserSelector = ({ users, onUserSelect }) => (
  <select onChange={(e) => onUserSelect(parseInt(e.target.value))}>
    <option value="">All Users</option>
    {users.map(user => (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    ))}
  </select>
);

export default UserSelector;
