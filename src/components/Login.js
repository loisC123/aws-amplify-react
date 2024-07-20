import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // 在這裡添加你的登入邏輯
    console.log('Logged in with', account, password);
    onLogin(); // 調用 onLogin 方法來更新登入狀態
    navigate('/');
  };

  return (
    <div className="login">
      <h2>登入</h2>
      <form onSubmit={handleLogin}>
        <label>帳號:</label>
        <input
          type="text"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
          required
        />
        <label>密碼:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">登入</button>
      </form>
    </div>
  );
};

export default Login;