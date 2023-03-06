import { useState } from 'react';

function LikeButton() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="like-button">
      <button onClick={handleCount}>{count} Likes</button>
    </div>
  );
}

export default LikeButton;
