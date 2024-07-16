import React, { useState } from 'react';
import axios from 'axios';
import './feedback/Settings.css';

const Settings = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [profile, setProfile] = useState({ name: '', email: '' });
  const [newProfile, setNewProfile] = useState({ newName: '', newEmail: '', currentPassword: '', newPassword: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value });
  };

  const login = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', credentials)
      .then(response => {
        if (response.data.success) {
          setProfile({ name: response.data.name, email: response.data.email });
          setIsLoggedIn(true);
        } else {
          setMessage(response.data.message);
        }
      })
      .catch(error => {
        console.error(error);
        setMessage('An error occurred during login.');
      });
  };

  const resetProfile = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/reset-profile', { ...credentials, ...newProfile })
      .then(response => {
        if (response.data.success) {
          setProfile({ name: response.data.name, email: response.data.email });
          setMessage('Profile updated successfully');
        } else {
          setMessage(response.data.message);
        }
      })
      .catch(error => {
        console.error(error);
        setMessage('An error occurred while updating the profile.');
      });
  };

  return (
    <div className="settings-container">
      <h2 className="settings-heading">Settings</h2>
      {!isLoggedIn ? (
        <form className="login-form" onSubmit={login}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      ) : (
        <form className="profile-form" onSubmit={resetProfile}>
          <input
            type="text"
            name="newName"
            placeholder="New Name"
            value={newProfile.newName}
            onChange={handleProfileChange}
            required
          />
          <input
            type="email"
            name="newEmail"
            placeholder="New Email"
            value={newProfile.newEmail}
            onChange={handleProfileChange}
            required
          />
          <input
            type="password"
            name="currentPassword"
            placeholder="Current Password"
            value={newProfile.currentPassword}
            onChange={handleProfileChange}
            required
          />
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={newProfile.newPassword}
            onChange={handleProfileChange}
            required
          />
          <button type="submit">Reset Profile</button>
        </form>
      )}
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Settings;
