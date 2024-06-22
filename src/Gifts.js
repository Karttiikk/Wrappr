import React, { useState } from 'react';
import './Gifts.css';

const Gifts = ({ gifts, setGifts }) => {
  const [giftName, setGiftName] = useState('');
  const [giftImage, setGiftImage] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddGift = () => {
    if (editIndex !== null) {
      const updatedGifts = gifts.map((gift, index) =>
        index === editIndex ? { name: giftName, image: giftImage } : gift
      );
      setGifts(updatedGifts);
      setEditIndex(null);
    } else {
      setGifts([...gifts, { name: giftName, image: giftImage }]);
    }
    setGiftName('');
    setGiftImage('');
  };

  const handleEditGift = (index) => {
    setGiftName(gifts[index].name);
    setGiftImage(gifts[index].image);
    setEditIndex(index);
  };

  const handleDeleteGift = (index) => {
    setGifts(gifts.filter((_, i) => i !== index));
  };

  return (
    <div className="gifts-container">
      <h1>Gifts</h1>
      <div className="gift-form">
        <input
          type="text"
          placeholder="Gift Name"
          value={giftName}
          onChange={(e) => setGiftName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={giftImage}
          onChange={(e) => setGiftImage(e.target.value)}
        />
        <button onClick={handleAddGift}>{editIndex !== null ? 'Update Gift' : 'Add Gift'}</button>
      </div>
      <div className="gifts-list">
        {gifts.map((gift, index) => (
          <div className="gift-tile" key={index}>
            <img src={gift.image} alt={gift.name} />
            <h3>{gift.name}</h3>
            <button onClick={() => handleEditGift(index)}>Edit</button>
            <button onClick={() => handleDeleteGift(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gifts;
