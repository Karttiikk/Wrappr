import React, { useState } from 'react';

function GiftForm({ setGifts, recipients }) {
  const [giftName, setGiftName] = useState('');
  const [recipient, setRecipient] = useState('');
  const [priority, setPriority] = useState('medium');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (giftName && recipient) {
      const newGift = {
        name: giftName,
        recipient,
        priority,
        purchased: false,
        image: imagePreview
      };
      setGifts(prevGifts => [...prevGifts, newGift]);
      setGiftName('');
      setRecipient('');
      setPriority('medium');
      setImage(null);
      setImagePreview(null);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(file);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setImagePreview(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Gift Name"
        value={giftName}
        onChange={(e) => setGiftName(e.target.value)}
        required
      />
      <select
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        required
      >
        <option value="" disabled>Select Recipient</option>
        {recipients.map((rec, index) => (
          <option key={index} value={rec}>{rec}</option>
        ))}
      </select>
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        required
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {imagePreview && <img src={imagePreview} alt="Gift Preview" style={{ width: '100px', height: '100px' }} />}
      <button type="submit">Add Gift</button>
    </form>
  );
}

export default GiftForm;
