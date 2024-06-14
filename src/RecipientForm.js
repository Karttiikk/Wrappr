import React, { useState } from 'react';

function RecipientForm({ setRecipients }) {
  const [recipientName, setRecipientName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recipientName) {
      setRecipients(prevRecipients => [...prevRecipients, recipientName]);
      setRecipientName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="recipient-form">
      <input
        type="text"
        placeholder="Recipient Name"
        value={recipientName}
        onChange={(e) => setRecipientName(e.target.value)}
        required
        className="recipient-input"
      />
      <button type="submit" className="recipient-submit-button">Add Recipient</button>
    </form>
  );
}

export default RecipientForm;
