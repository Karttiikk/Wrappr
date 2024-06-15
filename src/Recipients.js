
import React, { useState } from 'react';
import './Recipients.css';

const Recipients = ({ gifts }) => {
  const [recipients, setRecipients] = useState([]);
  const [recipientName, setRecipientName] = useState('');
  const [selectedRecipient, setSelectedRecipient] = useState(null);

  const handleAddRecipient = () => {
    setRecipients([...recipients, { name: recipientName, gifts: [] }]);
    setRecipientName('');
  };

  const handleEditRecipient = (index) => {
    const updatedRecipients = recipients.map((recipient, i) =>
      i === index ? { ...recipient, name: recipientName } : recipient
    );
    setRecipients(updatedRecipients);
    setSelectedRecipient(null);
    setRecipientName('');
  };

  const handleDeleteRecipient = (index) => {
    setRecipients(recipients.filter((_, i) => i !== index));
  };

  const handleAssignGift = (recipientIndex, giftIndex) => {
    const updatedRecipients = recipients.map((recipient, i) => {
      if (i === recipientIndex) {
        const updatedGifts = [...recipient.gifts, gifts[giftIndex]];
        return { ...recipient, gifts: updatedGifts };
      }
      return recipient;
    });
    setRecipients(updatedRecipients);
  };

  const handleMarkPurchased = (recipientIndex, giftIndex) => {
    const updatedRecipients = recipients.map((recipient, i) => {
      if (i === recipientIndex) {
        const updatedGifts = recipient.gifts.map((gift, gi) =>
          gi === giftIndex ? { ...gift, purchased: true } : gift
        );
        return { ...recipient, gifts: updatedGifts };
      }
      return recipient;
    });
    setRecipients(updatedRecipients);
  };

  return (
    <div className="recipients-container">
      <h1>Recipients</h1>
      <div className="recipient-form">
        <input
          type="text"
          placeholder="Recipient Name"
          value={recipientName}
          onChange={(e) => setRecipientName(e.target.value)}
        />
        <button onClick={selectedRecipient !== null ? () => handleEditRecipient(selectedRecipient) : handleAddRecipient}>
          {selectedRecipient !== null ? 'Update Recipient' : 'Add Recipient'}
        </button>
      </div>
      <div className="recipients-list">
        {recipients.map((recipient, index) => (
          <div className="recipient-tile" key={index}>
            <h3 onClick={() => setSelectedRecipient(index)}>{recipient.name}</h3>
            <button onClick={() => handleDeleteRecipient(index)}>Delete</button>
            <div className="assigned-gifts">
              {recipient.gifts.map((gift, gi) => (
                <div className="assigned-gift" key={gi}>
                  <span>{gift.name}</span>
                  <button onClick={() => handleMarkPurchased(index, gi)}>
                    {gift.purchased ? 'Purchased' : 'Mark as Purchased'}
                  </button>
                </div>
              ))}
            </div>
            <div className="assign-gift-form">
              <select onChange={(e) => handleAssignGift(index, e.target.value)}>
                <option value="">Assign Gift</option>
                {gifts.map((gift, gi) => (
                  <option key={gi} value={gi}>
                    {gift.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipients;
