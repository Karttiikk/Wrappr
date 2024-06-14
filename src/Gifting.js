import React, { useState } from 'react';
import GiftForm from './GiftForm';
import GiftList from './GiftList';
import RecipientForm from './RecipientForm';
import RecipientProfile from './RecipientProfile';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function Gifting() {
  const [gifts, setGifts] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [selectedRecipient, setSelectedRecipient] = useState(null);
  const [isRecipientModalOpen, setIsRecipientModalOpen] = useState(false);

  const openRecipientModal = () => {
    setIsRecipientModalOpen(true);
  };

  const closeRecipientModal = () => {
    setIsRecipientModalOpen(false);
  };

  const handleRecipientClick = (recipient) => {
    setSelectedRecipient(recipient);
  };

  return (
    <div className="gifting">
      <button className="add-recipient-button" onClick={openRecipientModal}>
        Add Recipient
      </button>
      
      <Modal
        isOpen={isRecipientModalOpen}
        onRequestClose={closeRecipientModal}
        contentLabel="Add Recipient"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Add Recipient</h2>
        <RecipientForm setRecipients={setRecipients} />
        <button onClick={closeRecipientModal}>Close</button>
      </Modal>

      <div className="recipient-list">
        {recipients.map((recipient, index) => (
          <div 
            key={index} 
            className="recipient-name" 
            onClick={() => handleRecipientClick(recipient)}
          >
            {recipient}
          </div>
        ))}
      </div>

      {selectedRecipient && (
        <RecipientProfile 
          recipient={selectedRecipient} 
          setGifts={setGifts} 
          gifts={gifts.filter(gift => gift.recipient === selectedRecipient)}
        />
      )}
    </div>
  );
}

export default Gifting;
