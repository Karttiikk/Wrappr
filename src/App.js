import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Gifts from './Gifts';
import Recipients from './Recipients';
import './Global.css'; 

function App() {
  const [gifts, setGifts] = useState([]);

  const handleAddGift = (gift) => {
    setGifts([...gifts, gift]);
  };

  const handleUpdateGifts = (updatedGifts) => {
    setGifts(updatedGifts);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gifts" element={<Gifts gifts={gifts} setGifts={handleUpdateGifts} />} />
        <Route path="/recipients" element={<Recipients gifts={gifts} />} />
      </Routes>
    </Router>
  );
}

export default App;
