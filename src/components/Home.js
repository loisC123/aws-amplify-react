import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>檔案共享</h1>
        <p>檔案共享平台。檔案管理或上傳請註冊並登入。只下載檔案不需登入。</p>
        <div className="home-buttons">
          <Link to="/login" className="home-button-link"><button className="home-button">登入</button></Link>
          <Link to="/register" className="home-button-link"><button className="home-button">註冊</button></Link>
        </div>
        <Link to="/introduction" className="home-button-link full-width"><button className="home-button">介紹</button></Link>
      </div>
      <div className="home-image">
        <img src=" folder.png" alt="十字架在聖經上" />
      </div>
    </div>
  );
};

export default Home;
