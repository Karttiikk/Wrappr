import React, { useState } from 'react';

function RecipientProfile({ recipient, setGifts, gifts }) {
  const [giftName, setGiftName] = useState('');
  const [giftImage, setGiftImage] = useState('');

  const handleGiftSubmit = (e) => {
    e.preventDefault();
    if (giftName) {
      const newGift = {
        name: giftName,
        image: giftImage,
        purchased: false,
        recipient
      };
      setGifts([...gifts, newGift]);
      setGiftName('');
      setGiftImage('');
    }
  };

  const handleDeleteGift = (index) => {
    const updatedGifts = [...gifts];
    updatedGifts[index].removing = true;
    setGifts(updatedGifts);

    setTimeout(() => {
      const finalUpdatedGifts = updatedGifts.filter((_, i) => i !== index);
      setGifts(finalUpdatedGifts);
    }, 300); // Duration of the fadeOut animation
  };

  const handleMarkAsPurchased = (index) => {
    const updatedGifts = [...gifts];
    updatedGifts[index].purchased = true;
    setGifts(updatedGifts);
  };

  return (
    <div className="recipient-profile">
      <h2>{recipient}'s Profile</h2>
      <form onSubmit={handleGiftSubmit} className="gift-form">
        <input
          type="text"
          placeholder="Gift Name"
          value={giftName}
          onChange={(e) => setGiftName(e.target.value)}
          required
          className="gift-input"
        />
        <input
          type="text"
          placeholder="Gift Image URL"
          value={giftImage}
          onChange={(e) => setGiftImage(e.target.value)}
          className="gift-input"
        />
        <button type="submit" className="gift-submit-button">Add Gift</button>
      </form>
      <h3>Gifts for {recipient}</h3>
      <ul className="gift-list">
        {gifts.map((gift, index) => (
          <li key={index} className={`gift-item ${gift.purchased ? 'purchased' : ''} ${gift.removing ? 'removing' : ''}`}>
            <div>
              <strong>{gift.name}</strong>
            </div>
            {gift.image && <img src={gift.image} alt={gift.name} className="gift-image" />}
            <div className="gift-actions">
              <button 
                className="mark-purchased-button" 
                onClick={() => handleMarkAsPurchased(index)}
                disabled={gift.purchased}
              >
                {gift.purchased ? 'Purchased' : 'Mark as Purchased'}
              </button>
              <button className="delete-gift-button" onClick={() => handleDeleteGift(index)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipientProfile;
