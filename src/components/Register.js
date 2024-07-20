// src/components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [account, setAccount] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // 在這裡添加你的註冊邏輯
    console.log('Registered with', name, password);
    navigate('/');
  };

  return (
    <div className="register">
      <h2>註冊</h2>
      <form onSubmit={handleRegister}>
        <label>姓名：</label>
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
        />
        <label>登入帳號：</label>
        <input
          type="account"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
          required
        />
        <label>密碼：</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>確認密碼：</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
