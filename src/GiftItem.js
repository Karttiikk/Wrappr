import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function GiftItem({ gift, index, setGifts }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDelete = () => {
    setGifts(prevGifts => prevGifts.filter((_, i) => i !== index));
  };

  const handleTogglePurchased = () => {
    setGifts(prevGifts =>
      prevGifts.map((g, i) => (i === index ? { ...g, purchased: !g.purchased } : g))
    );
  };

  return (
    <div>
      <div className={`gift-item ${gift.purchased ? 'purchased' : ''}`} onClick={() => setModalIsOpen(true)}>
        <span>{gift.name} for {gift.recipient}</span>
        <button onClick={handleTogglePurchased}>
          {gift.purchased ? 'Unmark' : 'Mark as Purchased'}
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Gift Details"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>{gift.name}</h2>
        <p>Recipient: {gift.recipient}</p>
        <p>Priority: {gift.priority}</p>
        {gift.image && <img src={gift.image} alt={gift.name} />}
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default GiftItem;
