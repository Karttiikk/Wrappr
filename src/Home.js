
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Wrappr!</h1>
        <p>
          Wrappr is your ultimate gift list app. Keep track of all your gift ideas, 
          organize them by recipients, and never forget a special occasion again. 
          Start adding your gifts and make every celebration memorable!
        </p>
      </div>
      <div className="home-image">
        <img src="/home.png" alt="Gifts" />
      </div>
    </div>
  );
}

export default Home;

