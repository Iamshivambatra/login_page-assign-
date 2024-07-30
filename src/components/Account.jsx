import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

const Account = () => {
  const [user, setUser] = useState({ email: '', username: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser) {
      navigate('/login');
    } else {
      setUser(loggedInUser);
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map(u => u.email === user.email ? user : u);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    alert('Account updated successfully');
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  return (
    <div className="container">
      <h2 className="heading">Account Information</h2>
      <form onSubmit={handleUpdate} className="form">
        <div className="form-group">
          <label className="label">Email</label>
          <input 
            type="email" 
            className="input" 
            name="email" 
            value={user.email} 
            onChange={handleChange} 
            disabled 
          />
        </div>
        <div className="form-group">
          <label className="label">Username</label>
          <input 
            type="text" 
            className="input" 
            name="username" 
            value={user.username} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit" className="button">Save</button>
        <button type="button" onClick={handleLogout} className="button logout-button">Logout</button>
      </form>
    </div>
  );
};

export default Account;
