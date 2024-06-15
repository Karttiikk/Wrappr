import React, { useState } from 'react';

const AddGift = ({ onAddGift }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !image) {
      alert('Please enter gift name and select an image.');
      return;
    }

    // Assuming onAddGift is a function passed from parent component to handle adding gifts
    onAddGift({ name, description, image });

    // Reset form fields after adding gift
    setName('');
    setDescription('');
    setImage(null);
  };

  return (
    <div className="add-gift">
      <h2>Add New Gift</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Gift Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <button type="submit">Add Gift</button>
      </form>
    </div>
  );
};

export default AddGift;
