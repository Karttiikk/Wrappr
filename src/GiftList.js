import React from 'react';
import GiftItem from './GiftItem';

function GiftList({ gifts, setGifts }) {
  const sortedGifts = [...gifts].sort((a, b) => {
    const priorities = { high: 1, medium: 2, low: 3 };
    return priorities[a.priority] - priorities[b.priority];
  });

  return (
    <div className="gift-list">
      {sortedGifts.map((gift, index) => (
        <GiftItem key={index} gift={gift} index={index} setGifts={setGifts} />
      ))}
    </div>
  );
}

export default GiftList;
