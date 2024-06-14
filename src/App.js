import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Gifting from './Gifting';
import Profile from './Profile';
import './Styles.css';
import { setTitleAndFavicon } from './setTitleAndFavicon';

function App() {
  useEffect(() => {
    setTitleAndFavicon('Wrappr', process.env.PUBLIC_URL + '/favicon.ico');
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gifting" element={<Gifting />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
